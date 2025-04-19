import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import CategoryDetail from './CategoryDetail';

type CategoryDetailProps = React.ComponentProps<typeof CategoryDetail>;

export default {
    title: 'Molecules/CategoryDetail',
    component: CategoryDetail,
    argTypes: {
        category: {
            control: {
                type: 'select',
                options: ['Food', 'Furniture', 'Accessory'],
            },
        },
        onChange: { action: 'changed' },
    },
} as Meta;

const Template: StoryFn<CategoryDetailProps> = (args) => (
    <CategoryDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {
    category: 'Food',
};

export const FurnitureCategory = Template.bind({});
FurnitureCategory.args = {
    category: 'Furniture',
};

export const AccessoryCategory = Template.bind({});
AccessoryCategory.args = {
    category: 'Accessory',
};
