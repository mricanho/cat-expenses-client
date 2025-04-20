'use client';

import React, { useState } from 'react';
import Text from '../../atoms/Text/Text';

type Expense = {
  id: string;
  name: string;
  category: string;
  amount: number;
};

type ExpensesProps = {
  expenses: Expense[];
  selectIds?: string[];
  onSelect?: (ids: string[]) => void;
};

const Expenses: React.FC<ExpensesProps> = ({
  expenses,
  selectIds = [],
  onSelect,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(selectIds);

  const toggleSelection = (id: string) => {
    const updatedSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((item) => item !== id)
      : [...selectedIds, id];
    setSelectedIds(updatedSelectedIds);
    if (onSelect) {
      onSelect(updatedSelectedIds);
    }
  };

  const highestSpending = Math.max(
    ...expenses.map((expense) => expense.amount),
    0
  );

  return (
    <div className="p-4">
      <Text variant="title-medium" className="text-lg font-bold">
        Expenses
      </Text>
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Select</th>
            <th className="border border-gray-300 px-4 py-2">Item Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr
              key={expense.id}
              className={
                expense.amount === highestSpending ? 'bg-green-100' : ''
              }
            >
              <td className="border border-gray-300 px-4 py-2 text-center">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(expense.id)}
                    onChange={() => toggleSelection(expense.id)}
                    title={`Select ${expense.name} from ${expense.category} category, cost ${expense.amount}`}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
              </td>
              <td className="border border-gray-300 px-4 py-2">{expense.name}</td>
              <td className="border border-gray-300 px-4 py-2">{expense.category}</td>
              <td className="border border-gray-300 px-4 py-2">${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
