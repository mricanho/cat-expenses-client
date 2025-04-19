import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import ConfirmDeletion from './ConfirmDeletion';

describe('ConfirmDeletion Component - Functionality and Styles', () => {
  it('renders the modal when isOpen is true', () => {
    render(
      <ConfirmDeletion isOpen={true} onClose={() => {}} onConfirm={() => {}} />
    );
    const modalTitle = screen.getByText('Confirm Deletion');
    expect(modalTitle).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    render(
      <ConfirmDeletion isOpen={false} onClose={() => {}} onConfirm={() => {}} />
    );
    const modalTitle = screen.queryByText('Confirm Deletion');
    expect(modalTitle).not.toBeInTheDocument();
  });

  it('calls onClose when the Cancel button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <ConfirmDeletion
        isOpen={true}
        onClose={handleClose}
        onConfirm={() => {}}
      />
    );
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when the Confirm button is clicked', () => {
    const handleConfirm = vi.fn();
    render(
      <ConfirmDeletion
        isOpen={true}
        onClose={() => {}}
        onConfirm={handleConfirm}
      />
    );
    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });

  it('applies the correct styles to the modal content', () => {
    render(
      <ConfirmDeletion isOpen={true} onClose={() => {}} onConfirm={() => {}} />
    );
    const modalContent = screen.getByText(
      'Are you sure you want to delete the selected items?'
    );
    expect(modalContent).toHaveClass('mt-2 text-sm text-gray-600');
  });
});
