import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import MainUI from './MainUI';

export default {
    title: 'Organisms/MainUI',
    component: MainUI,
} as Meta;

const Template: StoryFn = () => <MainUI />;

export const Default = Template.bind({});