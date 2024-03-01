'use client';

import { forwardRef } from 'react';
import styled from 'styled-components';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, ...props }, ref) => {
  return (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      {...props}
    />
  );
});

Button.displayName = 'Button';

const StyledButton = styled.button<Pick<ButtonProps, 'variant' | 'size'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: color 0.2s;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #000;
  }

  &:disabled {
    background-color: #f3f4f6;
    border-color: #f3f4f6;
    color: #d1d5db;
    cursor: not-allowed;
  }
`;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  style?: React.CSSProperties;
};

export { Button };
