import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Expenses from './Expenses';

describe('Expenses Component - Functionality and Styles', () => {
    const mockExpenses = [
        { id: '1', name: 'Cat Food', category: 'Food', amount: 50 },
        { id: '2', name: 'Cat Toy', category: 'Accessory', amount: 20 },
        { id: '3', name: 'Cat Bed', category: 'Furniture', amount: 100 },
    ];

    it('renders the list of expenses', () => {
        render(<Expenses expenses={mockExpenses} onDelete={() => { }} />);
        expect(screen.getByText('Cat Food')).toBeInTheDocument();
        expect(screen.getByText('Cat Toy')).toBeInTheDocument();
        expect(screen.getByText('Cat Bed')).toBeInTheDocument();
    });

    it('highlights the highest spending category', () => {
        render(<Expenses expenses={mockExpenses} onDelete={() => { }} />);
        const highestSpendingRow = screen.getByText('Cat Bed').closest('tr');
        expect(highestSpendingRow).toHaveClass('bg-green-100');
    });

    it('toggles selection of expenses', () => {
        render(<Expenses expenses={mockExpenses} onDelete={() => { }} />);
        const firstCheckbox = screen.getByTitle('Select Cat Food from Food category, cost 50');
        fireEvent.click(firstCheckbox);
        expect(firstCheckbox).toBeChecked();
    });
});