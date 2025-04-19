import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ConfirmDeletion from './ConfirmDeletion';

type ConfirmDeletionProps = React.ComponentProps<typeof ConfirmDeletion>;

export default {
  title: 'Molecules/ConfirmDeletion',
  component: ConfirmDeletion,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    onClose: { action: 'closed' },
    onConfirm: { action: 'confirmed' },
  },
} as Meta;

const Template: StoryFn<ConfirmDeletionProps> = (args) => (
  <ConfirmDeletion {...args} />
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};
