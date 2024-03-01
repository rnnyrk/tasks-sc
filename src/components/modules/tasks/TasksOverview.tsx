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
      <Heading color="white">Tasks</Heading>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  border-radius: 0.4rem;
  padding: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;

type TasksOverviewProps = {
  initialTasks: i.Task[];
};
