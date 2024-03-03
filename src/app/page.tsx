import { Suspense } from 'react';

import { getTasks } from '@server/data/tasks';
import { TasksOverview } from '@modules/tasks/TasksOverview';

export const metadata = {
  title: 'Tasks',
};

export const revalidate = 0;

async function Home() {
  const initialTasks = await getTasks();

  return (
    <section>
      <Suspense fallback="Loading tasks...">
        <TasksOverview initialTasks={initialTasks} />
      </Suspense>
    </section>
  );
}

export default Home;
