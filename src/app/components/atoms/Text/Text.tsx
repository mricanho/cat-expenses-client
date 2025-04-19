import React from 'react';

export type TextVariant = 'title' | 'display' | 'body';
export type TextColor = 'default' | 'primary' | 'secondary' | 'danger';
export type TextSize = 'small' | 'medium' | 'large';

type TextProps = {
  variant: TextVariant;
  color?: TextColor;
  size?: TextSize;
  className?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({
  variant,
  color = 'default',
  size = 'medium',
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
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${colorStyles[color]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
