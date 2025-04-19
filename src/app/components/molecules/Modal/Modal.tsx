import React, { useEffect } from 'react';
import Box from '../../atoms/Box/Box';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  overlayColor?: string;
  backgroundColor?: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, overlayColor, backgroundColor }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Box
      role="presentation"
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: overlayColor || 'rgba(0, 0, 0, 0.5)',
      }}
      onClick={onClose}
    >
      <Box
        className="relative rounded-lg shadow-lg p-4 w-1/3"
        style={{
          backgroundColor: backgroundColor || 'white',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-900 hover:text-gray-500"
        >
          &times;
        </button>
        {children}
      </Box>
    </Box>
  );
};

export default Modal;
