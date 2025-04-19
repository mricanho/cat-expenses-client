import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import CategoryDetail from './CategoryDetail';

describe('CategoryDetail Component - Functionality and Styles', () => {
    it('renders with default category', () => {
        render(<CategoryDetail category="Food" onChange={() => { }} />);
        const selectElement = screen.getByLabelText('Category');
        expect(selectElement).toBeInTheDocument();
        expect(selectElement).toHaveValue('Food');
    });

    it('renders all category options', () => {
        render(<CategoryDetail category="Food" onChange={() => { }} />);
        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(3);
        expect(options.map((opt) => opt.textContent)).toEqual([
            'Food',
            'Furniture',
            'Accessory',
        ]);
    });

    it('calls onChange when a new category is selected', () => {
        const handleChange = vi.fn();
        render(<CategoryDetail category="Food" onChange={handleChange} />);
        const selectElement = screen.getByLabelText('Category');
        fireEvent.change(selectElement, { target: { value: 'Furniture' } });
        expect(handleChange).toHaveBeenCalledWith('Furniture');
    });

    it('applies the correct styles to the select element', () => {
        render(<CategoryDetail category="Food" onChange={() => { }} />);
        const selectElement = screen.getByLabelText('Category');
        expect(selectElement).toHaveClass(
            'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        );
    });
});
