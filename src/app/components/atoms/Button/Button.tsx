import React from 'react';
import './Button.css';

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
  return (
    <button
      className={`button ${size} ${color} ${border} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
