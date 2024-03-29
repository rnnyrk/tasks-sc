'use client';

import type { z } from 'zod';

import { useZodForm } from '@hooks';
import { useCreateTask } from '@queries/tasks';
import { insertTaskSchema } from '@server/db/schema/tasks';
import { Form, FormField } from '@common/form/Form';
import { Input } from '@common/form/Input';
import { Button } from '@common/interaction/Button';
import { StyledForm } from '@common/layout/StyledForm';

export type AddTaskFormType = z.infer<typeof insertTaskSchema>;

export function AddTaskForm() {
  const form = useZodForm(insertTaskSchema, {
    defaultValues: {
      title: '',
    },
  });

  const { mutateAsync: onCreatePost, isPending } = useCreateTask();

  async function onSubmit(values: AddTaskFormType) {
    if (!values.title) return;
    await onCreatePost(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <Input
                placeholder="Task title.."
                field={field}
                style={{ marginRight: 8, flex: 2 }}
              />
            );
          }}
        />

        <Button
          type="submit"
          isDisabled={!form.formState.isValid || isPending}
        >
          Add
        </Button>
      </StyledForm>
    </Form>
  );
}
