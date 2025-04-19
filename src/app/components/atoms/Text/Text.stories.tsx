import { Meta, StoryFn } from '@storybook/react';
import Text, { TextColor, TextSize, TextVariant } from './Text';

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

const Template: StoryFn<{ variant: TextVariant; color?: TextColor; size?: TextSize; children: string }> = (args) => <Text {...args} />;

export const Title = Template.bind({});
Title.args = {
    variant: 'title',
    color: 'default',
    size: 'medium',
    children: 'Title Text',
};

export const Display = Template.bind({});
Display.args = {
    variant: 'display',
    color: 'primary',
    size: 'large',
    children: 'Display Text',
};

export const Body = Template.bind({});
Body.args = {
    variant: 'body',
    color: 'secondary',
    size: 'small',
    children: 'Body Text',
};