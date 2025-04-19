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
  const baseStyles = 'button';
  const sizeStyles = {
    small: 'button-small',
    medium: 'button-medium',
    large: 'button-large',
  };
  const colorStyles = {
    default: 'button-default',
    primary: 'button-primary',
    secondary: 'button-secondary',
    danger: 'button-danger',
  };
  const borderStyles = {
    none: 'button-border-none',
    solid: 'button-border-solid',
    dashed: 'button-border-dashed',
    dotted: 'button-border-dotted',
  };
  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${borderStyles[border]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
