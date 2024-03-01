'use client';

import type * as i from '@types';
import { useState } from 'react';
import styled from 'styled-components';

export function Task({ task }: TaskProps) {
  const [active, setActive] = useState(false);

  function onToggle() {
    setActive(!active);
  }

  return (
    <TaskButton onClick={onToggle}>
      <strong>{task.title}</strong>
      {task.completed_at && <span>{task.completed_at.toString()}</span>}
    </TaskButton>
  );
}

export const TaskButton = styled.button`
  display: flex;
  appearance: none;
  padding: 1rem;
  width: 100%;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

type TaskProps = {
  task: i.Task;
};
