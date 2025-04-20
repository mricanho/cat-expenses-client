import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach } from 'node:test';
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import MainUI from './MainUI';

describe('MainUI Component - Functionality and Integration', () => {
  beforeEach(() => {
    // Mocking the localStorage to avoid actual storage operations
    window.localStorage.setItem('expenses', JSON.stringify([]));
    window.localStorage.setItem('catFacts', JSON.stringify([]));
  });
  afterEach(() => {
    // Clear the localStorage after each test
    window.localStorage.clear();
  });
  it('renders the main UI elements', () => {
    render(<MainUI />);
    expect(screen.getByText('Cat Expense Tracker')).toBeInTheDocument();
    expect(screen.getByText('Add Expense')).toBeInTheDocument();
    expect(screen.getByText('Delete Expense')).toBeInTheDocument();
  });

  it('opens the add expense modal when Add Expense is clicked', () => {
    render(<MainUI />);
    fireEvent.click(screen.getByText('Add Expense'));
    expect(screen.getByText('Expense Detail')).toBeInTheDocument();
  });

  it('opens the confirm deletion modal when Delete Expense is clicked', async () => {
    render(<MainUI />);

    // Add an expense first
    fireEvent.click(screen.getByText('Add Expense'));
    fireEvent.change(screen.getByLabelText('Item Name'), {
      target: { value: 'cat Food' },
    });
    fireEvent.change(screen.getByLabelText('Category'), {
      target: { value: 'Food' },
    });
    fireEvent.change(screen.getByLabelText('Amount'), {
      target: { value: 50 },
    });
    fireEvent.click(screen.getByText('Submit'));

    // Select the added expense
    fireEvent.click(
      screen.getByTitle('Select cat Food from Food category, cost 50')
    );

    // Click the delete button
    fireEvent.click(screen.getByText('Delete Expense'));
    await waitFor(() => {
      expect(screen.getByText('Confirm')).toBeInTheDocument();
    });
  });

  it('adds a new expense and displays it in the list', () => {
    render(<MainUI />);
    fireEvent.click(screen.getByText('Add Expense'));

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

    expect(screen.getByText('Cat Food')).toBeInTheDocument();
  });

  it('deletes selected expenses from the list', async () => {
    render(<MainUI />);

    fireEvent.click(screen.getByText('Add Expense'));
    fireEvent.change(screen.getByLabelText('Item Name'), {
      target: { value: 'Dog Food' },
    });
    fireEvent.change(screen.getByLabelText('Category'), {
      target: { value: 'Food' },
    });
    fireEvent.change(screen.getByLabelText('Amount'), {
      target: { value: 50 },
    });
    fireEvent.click(screen.getByText('Submit'));

    // Select the added expense
    fireEvent.click(
      screen.getByTitle('Select Dog Food from Food category, cost 50')
    );
    fireEvent.click(screen.getByText('Delete Expense'));
    await waitFor(() => {
      expect(screen.getByText('Confirm')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Confirm'));
    await waitFor(() => {
      expect(screen.queryByText('Dog Food')).not.toBeInTheDocument();
    });
  });
});
