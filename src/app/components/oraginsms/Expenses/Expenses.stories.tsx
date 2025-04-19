import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Expenses from './Expenses';

export default {
    title: 'Organisms/Expenses',
    component: Expenses,
    argTypes: {
        onDelete: { action: 'deleted' },
    },
} as Meta;

const Template: StoryFn<{ expenses: { id: string; name: string; category: string; amount: number }[]; onDelete: (ids: string[]) => void }> = (args) => (
    <Expenses {...args} />
);

export const Default = Template.bind({});
Default.args = {
    expenses: [
        { id: '1', name: 'Cat Food', category: 'Food', amount: 50 },
        { id: '2', name: 'Cat Toy', category: 'Accessory', amount: 20 },
        { id: '3', name: 'Cat Bed', category: 'Furniture', amount: 100 },
    ],
};