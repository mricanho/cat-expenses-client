import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ExpenseDetail from './ExpenseDetail';

type ExpenseDetailProps = React.ComponentProps<typeof ExpenseDetail>;

export default {
  title: 'Molecules/ExpenseDetail',
  component: ExpenseDetail,
  argTypes: {
    onSubmit: { action: 'submitted' },
    onClose: { action: 'closed' },
  },
} as Meta;

const Template: StoryFn<ExpenseDetailProps> = (args) => (
  <ExpenseDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithPreFilledData = Template.bind({});
WithPreFilledData.args = {
  onSubmit: (expense) => console.log(expense),
  onClose: () => console.log('Closed'),
};
