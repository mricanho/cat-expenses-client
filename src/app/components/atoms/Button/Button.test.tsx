import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button Component - Styles and Functionality', () => {
  it('renders with default styles', () => {
    render(<Button onClick={() => {}}>Default Button</Button>);
    const buttonElement = screen.getByText('Default Button');
    expect(buttonElement).toHaveClass(
      'transition duration-200 ease-in-out font-sans rounded-lg text-base py-2 px-4 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900'
    );
  });

  it('applies the small size styles', () => {
    render(
      <Button onClick={() => {}} size="small">
        Small Button
      </Button>
    );
    const buttonElement = screen.getByText('Small Button');
    expect(buttonElement).toHaveClass('text-sm py-1 px-2');
  });

  it('applies the large size styles', () => {
    render(
      <Button onClick={() => {}} size="large">
        Large Button
      </Button>
    );
    const buttonElement = screen.getByText('Large Button');
    expect(buttonElement).toHaveClass('text-lg py-3 px-6');
  });

  it('applies the primary color styles', () => {
    render(
      <Button onClick={() => {}} color="primary">
        Primary Button
      </Button>
    );
    const buttonElement = screen.getByText('Primary Button');
    expect(buttonElement).toHaveClass(
      'bg-blue-600 text-white hover:bg-blue-700'
    );
  });

  it('applies the danger color styles', () => {
    render(
      <Button onClick={() => {}} color="danger">
        Danger Button
      </Button>
    );
    const buttonElement = screen.getByText('Danger Button');
    expect(buttonElement).toHaveClass('bg-red-600 text-white hover:bg-red-700');
  });

  it('applies the solid border styles', () => {
    render(
      <Button onClick={() => {}} border="solid">
        Solid Border Button
      </Button>
    );
    const buttonElement = screen.getByText('Solid Border Button');
    expect(buttonElement).toHaveClass(
      'border border-solid border-gray-300 hover:border-gray-400'
    );
  });

  it('applies the disabled attribute', () => {
    render(
      <Button onClick={() => {}} disabled>
        Disabled Button
      </Button>
    );
    const buttonElement = screen.getByText('Disabled Button');
    expect(buttonElement).toBeDisabled();
  });

  it('triggers the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const buttonElement = screen.getByText('Clickable Button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
