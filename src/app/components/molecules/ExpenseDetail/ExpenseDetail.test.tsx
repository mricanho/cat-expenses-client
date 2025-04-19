import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import ExpenseDetail from './ExpenseDetail';

describe('ExpenseDetail Component - Functionality and Styles', () => {
  it('renders the form with default values', () => {
    render(<ExpenseDetail onSubmit={() => {}} onClose={() => {}} />);
    expect(screen.getByLabelText('Item Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toHaveValue('Food');
    expect(screen.getByLabelText('Amount')).toHaveValue(0);
  });

  it('calls onSubmit with correct data when form is submitted', () => {
    const handleSubmit = vi.fn();
    render(<ExpenseDetail onSubmit={handleSubmit} onClose={() => {}} />);

    fireEvent.change(screen.getByLabelText('Item Name'), {
      target: { value: 'Cat Food' },
    });
    fireEvent.change(screen.getByLabelText('Category'), {
      target: { value: 'Food' },
    });
    fireEvent.change(screen.getByLabelText('Amount'), {
      target: { value: 50 },
    });

    fireEvent.click(screen.getByText('Submit'));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Cat Food',
      category: 'Food',
      amount: 50,
    });
  });

  it('shows an alert if mandatory fields are missing', () => {
    window.alert = vi.fn();
    render(<ExpenseDetail onSubmit={() => {}} onClose={() => {}} />);

    fireEvent.click(screen.getByText('Submit'));

    expect(window.alert).toHaveBeenCalledWith(
      'All fields are mandatory and amount must be greater than 0.'
    );
  });

  it('calls onClose when the Cancel button is clicked', () => {
    const handleClose = vi.fn();
    render(<ExpenseDetail onSubmit={() => {}} onClose={handleClose} />);

    fireEvent.click(screen.getByText('Cancel'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('displays a cat fact fetched from the API', async () => {
    vi.mock('../../../../services/catFacts', () => ({
      getCatFact: () => Promise.resolve('Cats sleep 16-18 hours per day.'),
    }));

    render(<ExpenseDetail onSubmit={() => {}} onClose={() => {}} />);

    expect(
      await screen.findByText('Cats sleep 16-18 hours per day.')
    ).toBeInTheDocument();
  });
});
