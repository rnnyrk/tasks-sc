import type * as i from '@types';

export type GetMovies = {
  activeGenres: string[] | null;
  initialMovies?: i.Movie[];
};
