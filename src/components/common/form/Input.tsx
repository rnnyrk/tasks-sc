'use client';

import { forwardRef } from 'react';
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './Form';

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, ...props }, ref) => {
  return (
    <StyledInput
      type={type}
      // className={cn(
      //   'flex h-12 w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-md text-black ring-offset-background',
      //   'file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400',
      //   'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      //   'disabled:cursor-not-allowed disabled:opacity-50',
      //   className,
      // )}
      ref={ref}
      {...props}
    />
  );
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

Input.displayName = 'Input';

const StyledInput = styled.input`
  display: flex;
  height: 3rem;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: #fff;
  color: #000;
  outline: none;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

function InputForm<T extends FieldValues, K extends Path<T> = any>({
  description,
  label,
  field,
  placeholder,
  style,
}: InputFormProps<T, K>) {
  return (
    <FormItem style={style}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          {...field}
        />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}

InputForm.displayName = 'InputForm';

type InputFormProps<T extends FieldValues, K extends Path<T>> = {
  description?: string | React.ReactNode;
  label: string;
  placeholder?: string;
  field: ControllerRenderProps<T, K>;
  style?: React.CSSProperties;
};

export { Input, InputForm };
