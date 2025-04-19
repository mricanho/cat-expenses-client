import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import InlineAlert from './InlineAlert';

type InlineAlertProps = React.ComponentProps<typeof InlineAlert>;

export default {
  title: 'Atoms/InlineAlert',
  component: InlineAlert,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'error'],
      },
    },
    message: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<InlineAlertProps> = (args) => <InlineAlert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success message!',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'This is an error message!',
};

export const DefaultSetting = Template.bind({});
DefaultSetting.args = {
  type: 'success',
  message: 'This is a default setting alert!',
  setting: 'default',
};

export const FixedSetting = Template.bind({});
FixedSetting.args = {
  type: 'success',
  message: 'This is a fixed setting alert!',
  setting: 'fixed',
};

export const LargeSetting = Template.bind({});
LargeSetting.args = {
  type: 'success',
  message: 'This is a large setting alert!',
  setting: 'large',
};

export const LargeFixedSetting = Template.bind({});
LargeFixedSetting.args = {
  type: 'success',
  message: 'This is a large fixed setting alert!',
  setting: 'large-fixed',
};

export const SmallSetting = Template.bind({});
SmallSetting.args = {
  type: 'success',
  message: 'This is a small setting alert!',
  setting: 'small',
};

export const SmallFixedSetting = Template.bind({});
SmallFixedSetting.args = {
  type: 'success',
  message: 'This is a small fixed setting alert!',
  setting: 'small-fixed',
};
