'use client';

import { FieldError, Input, Text, TextField } from 'react-aria-components';
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

import { Label } from './Label';

function InputForm<T extends FieldValues, K extends Path<T> = any>({
  label,
  description,
  errorMessage,
  field,
  ...props
}: InputFormProps<T, K>) {
  return (
    <TextField {...props}>
      <Label>{label}</Label>
      <StyledInput {...field} />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
}

InputForm.displayName = 'InputForm';

const StyledInput = styled(Input)`
  display: flex;
  width: 100%;
  padding: 0.4rem 0.6rem;
  font-size: 1.1rem;
  border-radius: 0.3rem;
  border: 1px solid #d1d5db;
  background-color: #fff;
  color: #000;
  outline: none;
  transition:
    border-color 0.15s ease-in-out,
    outline 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &[data-focused] {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -1px;
  }
`;

type InputFormProps<T extends FieldValues, K extends Path<T>> = {
  description?: string | React.ReactNode;
  errorMessage?: string;
  field: ControllerRenderProps<T, K>;
  label: string;
  placeholder?: string;
  style?: React.CSSProperties;
};

export { Input, InputForm };
