import type * as i from '@types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createTask, deleteTask, getTasks, updateTask } from '@server/data/tasks';

export function useTasks({ initialTasks }: i.GetTasks) {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTasks(),
    initialData: initialTasks,
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
  });
}
