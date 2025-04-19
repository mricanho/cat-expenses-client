import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Box from './Box';

describe('Box Component - Styles', () => {
  it('renders with default styles', () => {
    render(<Box>Default Box</Box>);
    const boxElement = screen.getByText('Default Box');
    expect(boxElement).toBeInTheDocument();
  });

  it('applies custom class names', () => {
    render(<Box className="custom-class">Styled Box</Box>);
    const boxElement = screen.getByText('Styled Box');
    expect(boxElement).toHaveClass('custom-class');
  });
});

describe('Box Component - Logic', () => {
  it('renders the specified HTML element', () => {
    render(<Box as="section">Section Box</Box>);
    const boxElement = screen.getByText('Section Box');
    expect(boxElement.tagName).toBe('SECTION');
  });

  it('forwards additional props', () => {
    render(<Box id="test-id">Box with Props</Box>);
    const boxElement = screen.getByText('Box with Props');
    expect(boxElement).toHaveAttribute('id', 'test-id');
  });
});
