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
  const baseStyles = 'transition duration-200 ease-in-out font-sans rounded-lg';
  const sizeStyles = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };
  const colorStyles = {
    default: 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-green-600 text-white hover:bg-green-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  const borderStyles = {
    none: '',
    solid: 'border border-solid border-gray-300 hover:border-gray-400',
    dashed: 'border border-dashed border-gray-300 hover:border-gray-400',
    dotted: 'border border-dotted border-gray-300 hover:border-gray-400',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${borderStyles[border]}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Button with ${color} color, ${size} size, and ${border} border`}
      title={`Button with ${color} color, ${size} size, and ${border} border`}
    >
      {children}
    </button>
  );
};

export default Button;
