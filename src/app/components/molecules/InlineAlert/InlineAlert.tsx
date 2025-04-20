import React from 'react';

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
};

const InlineAlert: React.FC<InlineAlertProps> = ({
  type,
  message,
  setting,
}) => {
  const settingStyles: Record<string, string> = {
    default: 'p-4 text-base',
    fixed: 'p-4 text-base fixed',
    large: 'p-6 text-lg',
    'large-fixed': 'p-6 text-lg fixed',
    small: 'p-2 text-sm',
    'small-fixed': 'p-2 text-sm fixed',
  };

  return (
    <Box
      className={`${INLINE_ALERT_STYLES[type]} ${setting ? settingStyles[setting] : ''}`}
      data-testid="inline-alert"
      as="div"
      role="alert"
    >
      <Text variant="body-medium" data-testid="inline-alert-text">
        {message}
      </Text>
    </Box>
  );
};

export default InlineAlert;
