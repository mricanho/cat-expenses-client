'use client';

import React, { useEffect, useState } from 'react';
import { getCatFact } from '../../../../services/catFacts';
import Box from '../../atoms/Box/Box';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

type ExpenseDetailProps = {
  onSubmit: (expense: {
    name: string;
    category: string;
    amount: number;
  }) => void;
  onClose: () => void;
};

const ExpenseDetail: React.FC<ExpenseDetailProps> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Food');
  const [amount, setAmount] = useState(0);
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    getCatFact().then(setCatFact);
  }, []);

  const handleSubmit = () => {
    if (!name || !category || amount <= 0) {
      alert('All fields are mandatory and amount must be greater than 0.');
      return;
    }
    onSubmit({ name, category, amount });
    onClose();
  };

  return (
    <Box className="p-4">
      <Box className="mb-4">
        <Text variant="title" className="text-lg font-bold">
          Expense Detail
        </Text>
      </Box>

      <Text variant="body" className="mt-2 text-sm text-gray-600">
        {catFact}
      </Text>
      <Box className="mt-4 space-y-4">
        <Box>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Item Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </Box>
        <CategoryDetail category={category} onChange={setCategory} />
        <Box>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </Box>
      </Box>
      <Box className="mt-4 flex justify-end space-x-2">
        <Button onClick={onClose} size="small" color="secondary" border="solid">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          size="small"
          color="primary"
          border="solid"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ExpenseDetail;
