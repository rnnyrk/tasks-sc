import { Suspense } from 'react';

import { getMovies } from '@server/data/movies';
import { OptimisticOverview } from '@modules/optimistic/OptimisticOverview';
import { OptimisticSidebar } from '@modules/optimistic/OptimisticSidebar';

export const metadata = {
  title: 'Optimistic',
};

async function Optimistic({ searchParams }: OptimisticProps) {
  const activeGenres = !searchParams?.genre
    ? []
    : typeof searchParams.genre === 'string'
      ? [searchParams.genre]
      : searchParams.genre;

  // Passing initial movies prevents a flash of initial empty state (like with genres)
  const initialMovies = await getMovies({ activeGenres });

  return (
    <div className="group grid grid-cols-6 items-start">
      <OptimisticSidebar activeGenres={activeGenres} />
      <section
        className="col-span-4 p-4 group-has-[[data-pending]]:animate-pulse"
        style={{ animationDuration: '.5s' }}
      >
        <Suspense
          fallback={<p>Loading...</p>}
          key={JSON.stringify(searchParams)}
        >
          <OptimisticOverview
            initialMovies={initialMovies}
            activeGenres={activeGenres}
          />
        </Suspense>
      </section>
    </div>
  );
}

type OptimisticProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default Optimistic;
