'use client';

import { useRef } from 'react';
import { useButton } from 'react-aria';
import type { ButtonProps as ButtonAriaProps } from 'react-aria-components';
import styled from 'styled-components';

function Button({ children, variant, ...props }: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <StyledButton
      ref={ref}
      variant={variant}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
}

Button.displayName = 'Button';

const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
  transition:
    color 0.2s,
    background-color 0.2s;
  border: none;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  outline-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: #000;
  }

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &[data-focus-visible] {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: -1px;
  }

  &:disabled {
    background-color: #f3f4f6;
    border-color: #f3f4f6;
    color: #d1d5db;
    cursor: not-allowed;
  }
`;

export type ButtonProps = Omit<ButtonAriaProps, 'children'> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  style?: React.CSSProperties;
};

export { Button };
