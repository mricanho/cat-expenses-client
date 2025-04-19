import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button Component - Styles', () => {
  it('applies the small size styles', () => {
    render(
      <Button size="small" onClick={() => {}}>
        Small Button
      </Button>
    );
    const buttonElement = screen.getByText('Small Button');
    expect(buttonElement).toHaveClass('button small');
  });

  it('applies the medium size styles', () => {
    render(
      <Button size="medium" onClick={() => {}}>
        Medium Button
      </Button>
    );
    const buttonElement = screen.getByText('Medium Button');
    expect(buttonElement).toHaveClass('button medium');
  });

  it('applies the large size styles', () => {
    render(
      <Button size="large" onClick={() => {}}>
        Large Button
      </Button>
    );
    const buttonElement = screen.getByText('Large Button');
    expect(buttonElement).toHaveClass('button large');
  });

  it('applies the default color styles', () => {
    render(
      <Button color="default" onClick={() => {}}>
        Default Color Button
      </Button>
    );
    const buttonElement = screen.getByText('Default Color Button');
    expect(buttonElement).toHaveClass('button default');
  });

  it('applies the primary color styles', () => {
    render(
      <Button color="primary" onClick={() => {}}>
        Primary Color Button
      </Button>
    );
    const buttonElement = screen.getByText('Primary Color Button');
    expect(buttonElement).toHaveClass('button primary');
  });

  it('applies the secondary color styles', () => {
    render(
      <Button color="secondary" onClick={() => {}}>
        Secondary Color Button
      </Button>
    );
    const buttonElement = screen.getByText('Secondary Color Button');
    expect(buttonElement).toHaveClass('button secondary');
  });

  it('applies the danger color styles', () => {
    render(
      <Button color="danger" onClick={() => {}}>
        Danger Color Button
      </Button>
    );
    const buttonElement = screen.getByText('Danger Color Button');
    expect(buttonElement).toHaveClass('button danger');
  });

  it('applies the none border styles', () => {
    render(
      <Button border="none" onClick={() => {}}>
        No Border Button
      </Button>
    );
    const buttonElement = screen.getByText('No Border Button');
    expect(buttonElement).toHaveClass('button none');
  });

  it('applies the solid border styles', () => {
    render(
      <Button border="solid" onClick={() => {}}>
        Solid Border Button
      </Button>
    );
    const buttonElement = screen.getByText('Solid Border Button');
    expect(buttonElement).toHaveClass('button solid');
  });

  it('applies the dashed border styles', () => {
    render(
      <Button border="dashed" onClick={() => {}}>
        Dashed Border Button
      </Button>
    );
    const buttonElement = screen.getByText('Dashed Border Button');
    expect(buttonElement).toHaveClass('button dashed');
  });

  it('applies the dotted border styles', () => {
    render(
      <Button border="dotted" onClick={() => {}}>
        Dotted Border Button
      </Button>
    );
    const buttonElement = screen.getByText('Dotted Border Button');
    expect(buttonElement).toHaveClass('button dotted');
  });
});

describe('Button Component - Logic', () => {
  it('renders the button with children text', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when the disabled prop is true', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );
    const buttonElement = screen.getByText('Disabled Button');
    expect(buttonElement).toBeDisabled();
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
