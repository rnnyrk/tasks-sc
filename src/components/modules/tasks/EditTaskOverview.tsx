'use client';

import type * as i from '@types';

import { StyledContainer } from '@common/layout/StyledContainer';
import { Heading } from '@common/typography/Heading';

import { EditTaskForm } from './EditTaskForm';

export function EditTaskOverview({ initialTask, taskId }: EditTaskOverviewProps) {
  return (
    <StyledContainer>
      <Heading $color="white">Edit task: {initialTask?.title}</Heading>
      <EditTaskForm
        taskId={taskId}
        initialTask={initialTask}
      />
    </StyledContainer>
  );
}

type EditTaskOverviewProps = {
  initialTask?: i.Task;
  taskId: string;
};
