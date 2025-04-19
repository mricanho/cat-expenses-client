'use client';

import React, { useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../../../../lib/localStorage';
import Button from '../../atoms/Button/Button';
import ConfirmDeletion from '../../molecules/ConfirmDeletion/ConfirmDeletion';
import ExpenseDetail from '../../molecules/ExpenseDetail/ExpenseDetail';
import InlineAlert from '../../molecules/InlineAlert/InlineAlert';
import Modal from '../../molecules/Modal/Modal';
import Expenses from '../Expenses/Expenses';

const MainUI: React.FC = () => {
  const [expenses, setExpenses] = useState<
    { id: string; name: string; category: string; amount: number }[]
  >(() => getFromLocalStorage('expenses') || []);
  const [isAdding, setIsAdding] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleAddExpense = (expense: {
    name: string;
    category: string;
    amount: number;
  }) => {
    const newExpense = { ...expense, id: Date.now().toString() };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    saveToLocalStorage('expenses', updatedExpenses);
  };
  const handleDeleteExpenses = (ids: string[]) => {
    const updatedExpenses = expenses.filter(
      (expense) => !ids.includes(expense.id)
    );
    setExpenses(updatedExpenses);
    saveToLocalStorage('expenses', updatedExpenses);
  };

  function onDeleteExpensesButtonClick() {
    if (selectedIds.length === 0) {
      alert('Please select at least one expense to delete.');
      return;
    }
    setIsConfirming(true);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cat Expense Tracker</h1>
      <div className="mt-4 flex justify-end space-x-2">
        {
          true && (
            <InlineAlert
              type="error"
              message={alertMessage}
              setting="small"
            />
          )
        }
        <Button
          onClick={() => setIsAdding(true)}
          size="small"
          color="primary"
          border="solid"
        >
          Add Expense
        </Button>
        <Button
          onClick={() => onDeleteExpensesButtonClick()}
          size="small"
          color="danger"
          border="solid"
          disabled={selectedIds.length === 0}
        >
          Delete Expense
        </Button>
      </div>
      <Expenses
        expenses={expenses}
        selectIds={selectedIds}
        onSelect={setSelectedIds}
      />
      {isAdding && (
        <Modal isOpen={isAdding} onClose={() => setIsAdding(false)}>
          <ExpenseDetail
            onSubmit={handleAddExpense}
            onClose={() => setIsAdding(false)}
          />
        </Modal>
      )}
      {isConfirming && (
        <ConfirmDeletion
          isOpen={isConfirming}
          onClose={() => setIsConfirming(false)}
          onConfirm={() => {
            handleDeleteExpenses(selectedIds);
            setIsConfirming(false);
          }}
        />
      )}
    </div>
  );
};

export default MainUI;
