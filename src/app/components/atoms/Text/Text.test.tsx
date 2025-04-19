import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Text from './Text';

describe('Text Component - Styles', () => {
    it('applies the title variant styles', () => {
        render(<Text variant="title">Title Text</Text>);
        const textElement = screen.getByText('Title Text');
        expect(textElement).toHaveClass('font-sans text-2xl font-bold');
    });

    it('applies the display variant styles', () => {
        render(<Text variant="display">Display Text</Text>);
        const textElement = screen.getByText('Display Text');
        expect(textElement).toHaveClass('font-sans text-xl font-semibold');
    });

    it('applies the body variant styles', () => {
        render(<Text variant="body">Body Text</Text>);
        const textElement = screen.getByText('Body Text');
        expect(textElement).toHaveClass('font-sans text-base');
    });

    it('applies the default color styles', () => {
        render(<Text variant="body" color="default">Default Color Text</Text>);
        const textElement = screen.getByText('Default Color Text');
        expect(textElement).toHaveClass('text-gray-800');
    });

    it('applies the primary color styles', () => {
        render(<Text variant="body" color="primary">Primary Color Text</Text>);
        const textElement = screen.getByText('Primary Color Text');
        expect(textElement).toHaveClass('text-blue-600');
    });

    it('applies the secondary color styles', () => {
        render(<Text variant="body" color="secondary">Secondary Color Text</Text>);
        const textElement = screen.getByText('Secondary Color Text');
        expect(textElement).toHaveClass('text-green-600');
    });

    it('applies the danger color styles', () => {
        render(<Text variant="body" color="danger">Danger Color Text</Text>);
        const textElement = screen.getByText('Danger Color Text');
        expect(textElement).toHaveClass('text-red-600');
    });

    it('applies the small size styles', () => {
        render(<Text variant="body" size="small">Small Size Text</Text>);
        const textElement = screen.getByText('Small Size Text');
        expect(textElement).toHaveClass('text-sm');
    });

    it('applies the medium size styles', () => {
        render(<Text variant="body" size="medium">Medium Size Text</Text>);
        const textElement = screen.getByText('Medium Size Text');
        expect(textElement).toHaveClass('text-base');
    });

    it('applies the large size styles', () => {
        render(<Text variant="body" size="large">Large Size Text</Text>);
        const textElement = screen.getByText('Large Size Text');
        expect(textElement).toHaveClass('text-lg');
    });
});