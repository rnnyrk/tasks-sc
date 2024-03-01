'use client';

import { useTextField } from 'react-aria';
import { FieldError, Text, TextField } from 'react-aria-components';
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

import { Label } from './Label';

function Input<T extends FieldValues, K extends Path<T> = any>({
  label,
  description,
  errorMessage,
  field,
  ...props
}: InputFormProps<T, K>) {
  const { inputProps } = useTextField(props, field.ref as any);

  return (
    <TextField {...props}>
      {label && <Label id={inputProps.name}>{label}</Label>}
      <StyledInput
        {...inputProps}
        {...field}
      />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
}

Input.displayName = 'Input';

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.4rem 0.6rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  outline-color: ${({ theme }) => theme.colors.secondary};

  &[data-focused] {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

type InputFormProps<T extends FieldValues, K extends Path<T>> = {
  description?: string | React.ReactNode;
  errorMessage?: string;
  field: ControllerRenderProps<T, K>;
  label?: string;
  placeholder?: string;
  style?: React.CSSProperties;
};

export { Input };
