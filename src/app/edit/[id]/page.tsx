import { Suspense } from 'react';

import { getTaskById } from '@server/data/tasks';
import { EditTaskOverview } from '@modules/tasks/EditTaskOverview';

export async function generateMetadata({ params }: EditItemPageProps) {
  const task = await getTaskById(params.id);

  return {
    title: `Edit task: ${task?.title}`,
  };
}

async function EditItemPage({ params }: EditItemPageProps) {
  const initialTask = await getTaskById(params.id);

  return (
    <section>
      <Suspense fallback="Loading task...">
        <EditTaskOverview
          initialTask={initialTask}
          taskId={params.id}
        />
      </Suspense>
    </section>
  );
}

type EditItemPageProps = {
  params: {
    id: string;
  };
};

export default EditItemPage;
