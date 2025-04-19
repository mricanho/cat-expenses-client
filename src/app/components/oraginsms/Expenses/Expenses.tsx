'use client';

import React, { useState } from 'react';
import Box from '../../atoms/Box/Box';
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

const Expenses: React.FC<ExpensesProps> = ({ expenses, selectIds = [], onSelect }) => {
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
    <Box className="p-4">
      <Text variant="title" className="text-lg font-bold">
        Expenses
      </Text>
      <Box
        as="table"
        className="mt-4 w-full border-collapse border border-gray-300"
      >
        <Box as="thead">
          <Box as="tr">
            <Box as="th" className="border border-gray-300 px-4 py-2">
              Select
            </Box>
            <Box as="th" className="border border-gray-300 px-4 py-2">
              Item Name
            </Box>
            <Box as="th" className="border border-gray-300 px-4 py-2">
              Category
            </Box>
            <Box as="th" className="border border-gray-300 px-4 py-2">
              Amount
            </Box>
          </Box>
        </Box>
        <Box as="tbody">
          {expenses.map((expense) => (
            <Box
              as="tr"
              key={expense.id}
              className={
                expense.amount === highestSpending ? 'bg-green-100' : ''
              }
            >
              <Box
                as="td"
                className="border border-gray-300 px-4 py-2 text-center"
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(expense.id)}
                    onChange={() => toggleSelection(expense.id)}
                    title={`Select ${expense.name} from ${expense.category} category, cost ${expense.amount}`}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
              </Box>
              <Box as="td" className="border border-gray-300 px-4 py-2">
                {expense.name}
              </Box>
              <Box as="td" className="border border-gray-300 px-4 py-2">
                {expense.category}
              </Box>
              <Box as="td" className="border border-gray-300 px-4 py-2">
                ${expense.amount}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Expenses;
