import { Meta, StoryFn } from '@storybook/react';
import Text, { TextColor, TextVariant } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['title', 'display', 'body'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'danger'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: StoryFn<{
  variant: TextVariant;
  color?: TextColor;
  children: string;
}> = (args) => <Text {...args} />;

export const Title = Template.bind({});
Title.args = {
  variant: 'title-medium',
  color: 'default',
  children: 'Title Text',
};

export const Display = Template.bind({});
Display.args = {
  variant: 'display-medium',
  color: 'primary',
  children: 'Display Text',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body-medium',
  color: 'secondary',
  children: 'Body Text',
};
