'use client';

import type { z } from 'zod';

import { useZodForm } from '@hooks';
import { useCreateTask } from '@queries/tasks';
import { insertTaskSchema } from '@server/db/schema/tasks';
import { Form, FormField } from '@common/form/Form';
import { InputForm } from '@common/form/Input';
import { Button } from '@common/interaction/Button';

export type AddTaskFormType = z.infer<typeof insertTaskSchema>;

export function AddTaskForm() {
  const form = useZodForm(insertTaskSchema, {
    defaultValues: {
      title: '',
    },
  });

  const { mutateAsync: onCreatePost } = useCreateTask();

  async function onSubmit(values: AddTaskFormType) {
    await onCreatePost(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <InputForm
                label="Title"
                field={field}
                style={{ marginBottom: 8 }}
              />
            );
          }}
        />

        <Button
          type="submit"
          isDisabled={!form.formState.isValid}
        >
          Add content
        </Button>
      </form>
    </Form>
  );
}
