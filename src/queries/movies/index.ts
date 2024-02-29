import type * as i from '@types';
import { useQuery } from '@tanstack/react-query';

import { getMovies } from '@server/data/movies';

export function useMovies({ activeGenres, initialMovies }: i.GetMovies) {
  return useQuery({
    queryKey: ['movies', activeGenres?.join(',')],
    queryFn: () => getMovies({ activeGenres }),
    initialData: initialMovies,
  });
}

export function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => getMovies({ activeGenres: null }),
    select: (data) => {
      if (!data) return [];

      const genres = data.map((movie) => {
        return movie.genres?.split(',');
      });

      return Array.from(new Set(genres.flat())) as string[];
    },
  });
}
