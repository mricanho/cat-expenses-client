import React from 'react';
import Box from '../../atoms/Box/Box';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import Modal from '../Modal/Modal';

type ConfirmDeletionProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmDeletion: React.FC<ConfirmDeletionProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Box className="p-4">
        <Box className="mb-4">
          <Text variant="title-small">Confirm Deletion</Text>
        </Box>
        <Box className="mb-4">
          <Text variant="body-medium" color="danger">
            Are you sure you want to delete the selected items?
          </Text>
        </Box>
        <Box className="mt-4 flex justify-end space-x-2">
          <Button
            onClick={onClose}
            size="small"
            color="secondary"
            border="solid"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            size="small"
            color="danger"
            border="solid"
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmDeletion;
