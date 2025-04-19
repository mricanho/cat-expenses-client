import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Box from './Box';

type BoxProps = React.ComponentProps<typeof Box>;

export default {
    title: 'Atoms/Box',
    component: Box,
    argTypes: {
        as: {
            control: {
                type: 'select',
                options: ['div', 'section', 'article', 'span'],
            },
        },
        className: { control: 'text' },
        children: { control: 'text' },
    },
} as Meta;

const Template: StoryFn<BoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Box',
};

export const CustomElement = Template.bind({});
CustomElement.args = {
    as: 'section',
    children: 'Section Box',
};

export const StyledBox = Template.bind({});
StyledBox.args = {
    className: 'bg-blue-500 text-white p-4',
    children: 'Styled Box',
};