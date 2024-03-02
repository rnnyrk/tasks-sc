'use client';

import type * as i from '@types';
import { useRouter } from 'next/navigation';
import type { z } from 'zod';

import { useZodForm } from '@hooks';
import { useUpdateTask } from '@queries/tasks';
import { updateTaskSchema } from '@server/db/schema';
import { Form, FormField } from '@common/form/Form';
import { Input } from '@common/form/Input';
import { Button } from '@common/interaction/Button';
import { StyledForm } from '@common/layout/StyledForm';

export type UpdateTaskFormType = z.infer<typeof updateTaskSchema>;

export function EditTaskForm({ initialTask, taskId }: EditTaskFormProps) {
  const router = useRouter();
  const { mutateAsync: onUpdate, isPending } = useUpdateTask();

  const form = useZodForm(updateTaskSchema, {
    defaultValues: {
      title: initialTask?.title,
    },
  });

  const onSubmit = async (values: i.UpdateTask['values']) => {
    await onUpdate({ taskId, values });
    router.push('/');
  };

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
          Edit
        </Button>
      </StyledForm>
    </Form>
  );
}

type EditTaskFormProps = {
  initialTask?: i.Task;
  taskId: string;
};
