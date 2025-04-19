import { render, screen, within } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import InlineAlert from './InlineAlert';

describe('InlineAlert Component', () => {
  describe('Styles', () => {
    it('applies the default setting styles', () => {
      render(
        <InlineAlert
          type="success"
          message="Default Setting"
          setting="default"
        />
      );
      const alertBox = screen.getByTestId('inline-alert');

      expect(alertBox).toHaveClass('p-4 text-base');
    });

    it('applies the fixed setting styles', () => {
      render(
        <InlineAlert type="success" message="Fixed Setting" setting="fixed" />
      );
      const alertBox = screen.getByTestId('inline-alert');

      expect(alertBox).toHaveClass('p-4 text-base fixed');
    });

    it('applies the large setting styles', () => {
      render(
        <InlineAlert type="success" message="Large Setting" setting="large" />
      );
      const alertBox = screen.getByTestId('inline-alert');

      expect(alertBox).toHaveClass('p-6 text-lg');
    });

    it('applies the large-fixed setting styles', () => {
      render(
        <InlineAlert
          type="success"
          message="Large Fixed Setting"
          setting="large-fixed"
        />
      );
      const alertBox = screen.getByTestId('inline-alert');

      expect(alertBox).toHaveClass('p-6 text-lg fixed');
    });

    it('applies the small setting styles', () => {
      render(
        <InlineAlert type="success" message="Small Setting" setting="small" />
      );
      const alertBox = screen.getByTestId('inline-alert');

      expect(alertBox).toHaveClass('p-2 text-sm');
    });

    it('applies the small-fixed setting styles', () => {
      render(
        <InlineAlert
          type="success"
          message="Small Fixed Setting"
          setting="small-fixed"
        />
      );
      const alertBox = screen.getByTestId('inline-alert');

      expect(alertBox).toHaveClass('p-2 text-sm fixed');
    });
  });
  describe('logic', () => {
    it('renders a success message', () => {
      render(<InlineAlert type="success" message="Success!" />);
      const alertBox = screen.getByTestId('inline-alert');
      const alertText = within(alertBox).getByTestId('inline-alert-text');

      expect(alertBox).toBeInTheDocument();
      expect(alertBox).toHaveClass('bg-green-100 text-green-700');
      expect(alertText).toBeInTheDocument();
      expect(alertText).toHaveClass('font-sans text-base');
    });

    it('renders an error message', () => {
      render(<InlineAlert type="error" message="Error!" />);
      const alertBox = screen.getByTestId('inline-alert');
      const alertText = within(alertBox).getByTestId('inline-alert-text');

      expect(alertBox).toBeInTheDocument();
      expect(alertBox).toHaveClass('bg-red-100 text-red-700');
      expect(alertText).toBeInTheDocument();
      expect(alertText).toHaveClass('font-sans text-base');
    });
    it('renders an info message', () => {
      render(<InlineAlert type="info" message="Info!" />);
      const alertBox = screen.getByTestId('inline-alert');
      const alertText = within(alertBox).getByTestId('inline-alert-text');

      expect(alertBox).toBeInTheDocument();
      expect(alertBox).toHaveClass('bg-blue-100 text-blue-700');
      expect(alertText).toBeInTheDocument();
      expect(alertText).toHaveClass('font-sans text-base');
    });
    it('renders a warning message', () => {
      render(<InlineAlert type="warning" message="Warning!" />);
      const alertBox = screen.getByTestId('inline-alert');
      const alertText = within(alertBox).getByTestId('inline-alert-text');

      expect(alertBox).toBeInTheDocument();
      expect(alertBox).toHaveClass('bg-yellow-100 text-yellow-700');
      expect(alertText).toBeInTheDocument();
      expect(alertText).toHaveClass('font-sans text-base');
    });
  });
  describe('Accessibility', () => {
    it('has the correct role attribute', () => {
      render(<InlineAlert type="success" message="Success!" />);
      const alertBox = screen.getByTestId('inline-alert');

      expect(alertBox).toHaveAttribute('role', 'alert');
    });
  });
});
