import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Box from '../../atoms/Box/Box';
import Modal from './Modal';

export default {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    onClose: { action: 'closed' },
  },
} as Meta;

const Template: StoryFn<{ isOpen: boolean; onClose: () => void }> = (args) => (
  <Modal {...args}>
    <Box className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">Modal Title</h2>
      <p className="mt-2 text-sm text-gray-600">This is the modal content.</p>
    </Box>
  </Modal>
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};
