import React from 'react';
import Box from '../Box/Box';

export type TextVariant =
  | 'title-small'
  | 'title-medium'
  | 'title-large'
  | 'display-small'
  | 'display-medium'
  | 'display-large'
  | 'body-small'
  | 'body-medium'
  | 'body-large';
export type TextColor = 'default' | 'primary' | 'secondary' | 'danger';

type TextProps = {
  variant: TextVariant;
  color?: TextColor;
  className?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({
  variant,
  color = 'default',
  className = '',
  children,
  ...props
}: TextProps) => {
  const baseStyles = 'font-sans';
  const variantStyles = {
    title: 'text-2xl font-bold',
    display: 'text-xl font-semibold',
    body: 'text-base',
  };

  const colorStyles = {
    default: 'text-gray-800',
    primary: 'text-blue-600',
    secondary: 'text-green-600',
    danger: 'text-red-600',
  };

  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  return (
    <Box
      className={`${baseStyles} ${variantStyles[variant.split('-')[0] as 'title' | 'display' | 'body']} ${sizeStyles[variant.split('-')[1] as 'small' | 'medium' | 'large']} ${colorStyles[color]} ${className}`}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Text;
