import React from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'danger';
export type ButtonBorder = 'none' | 'solid' | 'dashed' | 'dotted';

export interface ButtonProps {
  onClick: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  border?: ButtonBorder;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  size = 'medium',
  color = 'default',
  border = 'none',
  children,
  disabled,
}: ButtonProps) => {
  const baseStyles = 'font-sans rounded focus:outline-none';
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  const colorStyles = {
    default: 'bg-gray-200 text-gray-800',
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    danger: 'bg-red-500 text-white',
  };
  const borderStyles = {
    none: 'border-none',
    solid: 'border border-solid',
    dashed: 'border border-dashed',
    dotted: 'border border-dotted',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${borderStyles[border]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
