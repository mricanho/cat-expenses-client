import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button Component - Styles and Functionality', () => {
  it('renders with default styles', () => {
    render(<Button onClick={() => {}}>Default Button</Button>);
    const buttonElement = screen.getByText('Default Button');
    expect(buttonElement).toHaveClass(
      'button button-medium button-default button-border-none'
    );
  });

  it('applies the small size styles', () => {
    render(
      <Button onClick={() => {}} size="small">
        Small Button
      </Button>
    );
    const buttonElement = screen.getByText('Small Button');
    expect(buttonElement).toHaveClass('button-small');
  });

  it('applies the large size styles', () => {
    render(
      <Button onClick={() => {}} size="large">
        Large Button
      </Button>
    );
    const buttonElement = screen.getByText('Large Button');
    expect(buttonElement).toHaveClass('button-large');
  });

  it('applies the primary color styles', () => {
    render(
      <Button onClick={() => {}} color="primary">
        Primary Button
      </Button>
    );
    const buttonElement = screen.getByText('Primary Button');
    expect(buttonElement).toHaveClass('button-primary');
  });

  it('applies the danger color styles', () => {
    render(
      <Button onClick={() => {}} color="danger">
        Danger Button
      </Button>
    );
    const buttonElement = screen.getByText('Danger Button');
    expect(buttonElement).toHaveClass('button-danger');
  });

  it('applies the solid border styles', () => {
    render(
      <Button onClick={() => {}} border="solid">
        Solid Border Button
      </Button>
    );
    const buttonElement = screen.getByText('Solid Border Button');
    expect(buttonElement).toHaveClass('button-border-solid');
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
