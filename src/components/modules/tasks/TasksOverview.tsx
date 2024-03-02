'use client';

import type * as i from '@types';

import { useTasks } from '@queries/tasks';
import { StyledContainer } from '@common/layout/StyledContainer';
import { Heading } from '@common/typography/Heading';

import { AddTaskForm } from './AddTaskForm';
import { TasksList } from './TasksList';

export function TasksOverview({ initialTasks }: TasksOverviewProps) {
  // @TODO hydration error with initialTasks?
  const { data: tasks } = useTasks({});

  return (
    <StyledContainer>
      <Heading $color="white">Tasks</Heading>
      <TasksList tasks={tasks ?? initialTasks} />
      <AddTaskForm />
    </StyledContainer>
  );
}

type TasksOverviewProps = {
  initialTasks: i.Task[];
};
