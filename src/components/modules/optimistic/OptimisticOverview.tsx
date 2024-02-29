'use client';

import type * as i from '@types';

import { useMovies } from '@queries/movies';
import { Heading } from '@common/typography/Heading';

export function OptimisticOverview({ activeGenres, initialMovies }: OptimisticOverviewProps) {
  const { data: movies } = useMovies({ activeGenres, initialMovies });

  return (
    <article>
      <Heading className="mb-2">Optimistic (server)</Heading>
      <div className="grid grid-cols-3 gap-4">
        {movies?.map((movie) => {
          return (
            <div
              key={movie.id}
              className="p-2 border-slate-600 bg-slate-800 border rounded-md"
            >
              <strong>
                {movie.title} - {movie.year}
              </strong>
              <p className="my-2 text-gray-400">{movie.director}</p>
              <span className="text-sm text-gray-400 italic">
                {movie.genres?.split(',').join(', ')}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

type OptimisticOverviewProps = {
  activeGenres: string[];
  initialMovies: i.Movie[];
};
