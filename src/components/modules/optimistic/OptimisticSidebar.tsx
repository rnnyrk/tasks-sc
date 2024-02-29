'use client';

import { useOptimistic, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { useGenres } from '@queries/movies';
import { cn } from '@utils';
import { Heading } from '@common/typography/Heading';

export function OptimisticSidebar({ activeGenres }: OptimisticSidebarProps) {
  const router = useRouter();
  const { data: genres, isLoading } = useGenres();
  const [optimisticGenres, setOptimisticGenres] = useOptimistic(activeGenres);
  const [pending, startTransition] = useTransition();

  function updateGenres(newGenres: string[]) {
    const newParams = new URLSearchParams(newGenres.sort().map((genre) => ['genre', genre]));

    startTransition(() => {
      setOptimisticGenres(newGenres.sort());
      router.push(`?${newParams as unknown as string}`);
    });
  }

  return (
    <aside
      data-pending={pending ? '' : undefined}
      className="col-span-2 p-4 bg-slate-800 rounded-lg"
    >
      <Heading
        variant="h3"
        className="mb-2"
      >
        Genres
      </Heading>
      <div className="flex gap-2 flex-wrap mb-4">
        {isLoading && <div className="animate-pulse bg-slate-600 w-6 h-6 rounded-full" />}
        {genres?.sort().map((genre) => {
          const isActive = optimisticGenres.includes(genre);

          return (
            <button
              key={`genre-btn-${genre}`}
              onClick={() => {
                const newGenres = !optimisticGenres.includes(genre)
                  ? [...optimisticGenres, genre]
                  : optimisticGenres.filter((g) => g !== genre);

                updateGenres(newGenres);
              }}
              className={cn('px-3 py-1 rounded-full whitespace-nowrap font-medium border text-sm', {
                'bg-secondary text-white border-secondary ': isActive,
                'border-gray-500 hover:border-gray-400': !isActive,
              })}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div>
        <strong className="mb-2">Params (Client):</strong>
        <ul>{optimisticGenres?.map((genre) => <li key={`list-${genre}`}>{genre}</li>)}</ul>
      </div>
    </aside>
  );
}

type OptimisticSidebarProps = {
  activeGenres: string[];
};
