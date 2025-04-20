'use client';

import React, { useEffect, useState } from 'react';
import { getCatFact } from '../../../../services/catFacts';
import Box from '../../atoms/Box/Box';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import InlineAlert from '../InlineAlert/InlineAlert';

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
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    getCatFact().then(setCatFact);
  }, []);

  const handleSubmit = () => {
    if (!name || !category || amount <= 0) {
      setAlertMessage(
        'All fields are mandatory and amount must be greater than 0.'
      );
      return;
    }
    onSubmit({ name, category, amount });
    onClose();
  };

  return (
    <Box className="p-4">
      <Box className="mb-4">
        <Text variant="title-medium">Expense Detail</Text>
      </Box>
      <Text variant="body-small">
        {catFact ? 'Did you know?' : 'Loading cat fact...'}
      </Text>
      <Text variant="body-medium" color="secondary">
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
            className="p-2 mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            onFocus={(e) => e.target.select()}
            className="p-2 mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </Box>
      </Box>
      {alertMessage && (
        <Box className="mt-4" as="div">
          <InlineAlert
            type="error"
            message={alertMessage}
            setting="small"
            timeout={3000}
            onClose={() => setAlertMessage('')}
          />
        </Box>
      )}
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
