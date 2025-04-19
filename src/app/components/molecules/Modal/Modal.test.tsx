import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import Modal from './Modal';

describe('Modal Component - Functionality and Styles', () => {
    it('renders the modal when isOpen is true', () => {
        render(
            <Modal isOpen={true} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>
        );
        const modalContent = screen.getByText('Modal Content');
        expect(modalContent).toBeInTheDocument();
    });

    it('does not render the modal when isOpen is false', () => {
        render(
            <Modal isOpen={false} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>
        );
        const modalContent = screen.queryByText('Modal Content');
        expect(modalContent).not.toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
        const handleClose = vi.fn();
        render(
            <Modal isOpen={true} onClose={handleClose}>
                <div>Modal Content</div>
            </Modal>
        );
        const closeButton = screen.getByText('×');
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when clicking outside the modal', () => {
        const handleClose = vi.fn();
        render(
            <Modal isOpen={true} onClose={handleClose}>
                <div>Modal Content</div>
            </Modal>
        );
        const overlay = screen.getByRole('presentation');
        fireEvent.click(overlay);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when the Escape key is pressed', () => {
        const handleClose = vi.fn();
        render(
            <Modal isOpen={true} onClose={handleClose}>
                <div>Modal Content</div>
            </Modal>
        );
        fireEvent.keyDown(document, { key: 'Escape' });
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});