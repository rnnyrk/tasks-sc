'use client';

import { useRef } from 'react';
import type { z } from 'zod';

import { useZodForm } from '@hooks';
import { useCreatePost } from '@queries/posts';
import { insertPostSchema } from '@server/db/schema/posts';
import { Form, FormField } from '@common/form/Form';
import { InputForm } from '@common/form/Input';
import { Button } from '@common/interaction/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@common/interaction/Dialog';

export type AddBlogForm = z.infer<typeof insertPostSchema>;

export function AddBlogModal() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const form = useZodForm(insertPostSchema, {
    defaultValues: {
      name: '',
      content: '',
    },
  });

  const { mutateAsync: onCreatePost } = useCreatePost();

  async function onSubmit(values: AddBlogForm) {
    await onCreatePost(values);

    // Reset form, close modal
    form.reset();
    btnRef?.current?.click();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          ref={btnRef}
          variant="secondary"
          className="fixed bottom-4 left-2/4 -translate-x-2/4"
        >
          Add content
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[600px] bg-slate-800 border-slate-600 p-8">
        <DialogHeader className="mb-4">
          <DialogTitle>Add a new content</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <InputForm
                    className="mb-4"
                    label="Name"
                    field={field}
                  />
                );
              }}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => {
                return (
                  <InputForm
                    label="Description"
                    field={field}
                  />
                );
              }}
            />

            <Button
              type="submit"
              className="mt-8"
              disabled={!form.formState.isValid}
            >
              Add content
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
