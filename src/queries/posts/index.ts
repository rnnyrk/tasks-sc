import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createPost, getPosts } from '@server/data/posts';

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });
}
