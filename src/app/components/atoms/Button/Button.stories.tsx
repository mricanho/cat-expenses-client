import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Button from './Button';

type ButtonProps = React.ComponentProps<typeof Button>;

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
    },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
    children: 'Size Small Button',
    size: 'small',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
    children: 'Size Medium Button',
    size: 'medium',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
    children: 'Size Large Button',
    size: 'large',
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
    children: 'Color Primary Button',
    color: 'primary',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
    children: 'Color Secondary Button',
    color: 'secondary',
};

export const ColorDanger = Template.bind({});
ColorDanger.args = {
    children: 'Color Danger Button',
    color: 'danger',
};

export const BorderSolid = Template.bind({});
BorderSolid.args = {
    children: 'Border Solid Button',
    border: 'solid',
};

export const BorderDashed = Template.bind({});
BorderDashed.args = {
    children: 'Border Dashed Button',
    border: 'dashed',
};

export const BorderDotted = Template.bind({});
BorderDotted.args = {
    children: 'Border Dotted Button',
    border: 'dotted',
};

