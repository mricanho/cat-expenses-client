import React, { useEffect } from 'react';

export const INLINE_ALERT_TYPES = [
  'success',
  'error',
  'info',
  'warning',
] as const;
export type InlineAlertType = (typeof INLINE_ALERT_TYPES)[number];

const INLINE_ALERT_STYLES: Record<InlineAlertType, string> = {
  success: 'bg-green-100 text-green-700',
  error: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  warning: 'bg-yellow-100 text-yellow-700',
};

import Box from '../../atoms/Box/Box';
import Text from '../../atoms/Text/Text';

type InlineAlertProps = {
  type: InlineAlertType;
  message: string;
  setting?:
    | 'default'
    | 'fixed'
    | 'large'
    | 'large-fixed'
    | 'small'
    | 'small-fixed';
  timeout?: number;
  onClose?: () => void;
};

const InlineAlert: React.FC<InlineAlertProps> = ({
  type,
  message,
  setting,
  timeout,
  onClose,
}) => {
  const settingStyles: Record<string, string> = {
    default: 'p-4 text-base',
    fixed: 'p-4 text-base fixed',
    large: 'p-6 text-lg',
    'large-fixed': 'p-6 text-lg fixed',
    small: 'p-2 text-sm',
    'small-fixed': 'p-2 text-sm fixed',
  };

  // transition when the alert is shown and hidden
  const [show, setShow] = React.useState(true);
  useEffect(() => {
    if (timeout) {
      const timer = setTimeout(() => {
        setShow(false);
        if (onClose) onClose();
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [timeout, onClose]);

  // close the alert when the close button is clicked
  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  // close the alert when the escape key is pressed
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShow(false);
      if (onClose) onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <Box
      className={`flex items-center justify-between ${INLINE_ALERT_STYLES[type]} ${settingStyles[setting || 'default']} ${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      data-testid="inline-alert"
      as="div"
      role="alert"
    >
      <Text variant="body-medium" data-testid="inline-alert-text">
        {message}
      </Text>
      <button
        className="relative ml-4 p-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={handleClose}
        data-testid="inline-alert-close-button"
        aria-label="Close alert"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </Box>
  );
};

export default InlineAlert;
