'use client';

import type * as i from '@types';
import styled from 'styled-components';

import { useTasks } from '@queries/tasks';
import { Heading } from '@common/typography/Heading';

import { AddTaskForm } from './AddTaskForm';
import { TasksList } from './TasksList';

export function TasksOverview({ initialTasks }: TasksOverviewProps) {
  const { data: tasks, isLoading } = useTasks({ initialTasks });
  if (!tasks || isLoading) return <div>Loading...</div>;

  return (
    <StyledTasksOverview>
      <Heading>Tasks</Heading>
      <TasksList tasks={tasks} />
      <AddTaskForm />
    </StyledTasksOverview>
  );
}

const StyledTasksOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  max-width: 600px;
  margin: 0 auto;
`;

type TasksOverviewProps = {
  initialTasks: i.Task[];
};
