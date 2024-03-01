'use client';

import type * as i from '@types';
import { useState } from 'react';
import { Checkbox, ListBox, ListBoxItem } from 'react-aria-components';
import styled from 'styled-components';

export function Task({ task }: TaskProps) {
  return (
    <TaskItemContainer>
      <strong>{task.title}</strong>
      {task.completed_at && <span>{task.completed_at.toString()}</span>}
    </TaskItemContainer>
  );
}

export const TaskItemContainer = styled.div`
  display: flex;
  appearance: none;
  padding: 0.6rem;
  width: 100%;
  font-size: 1.1rem;
`;

type TaskProps = {
  task: i.Task;
};

export function TasksList({ tasks }: TasksListProps) {
  const [active, setActive] = useState(false);

  function onToggle() {
    setActive(!active);
  }

  function onSetItems(keys: string[]) {
    console.log(keys);
  }

  return (
    <StyledListBox
      selectionMode="multiple"
      // onSelectionChange={onSetItems}
    >
      {tasks.map((task) => (
        <StyledListBoxItem
          key={task.id}
          id={task.id}
        >
          <Task task={task} />
        </StyledListBoxItem>
      ))}
    </StyledListBox>
  );
}

const StyledListBox = styled(ListBox)`
  display: flex;
  flex-direction: column;
  max-height: inherit;
  overflow: auto;
  padding: 2px;
  border-radius: 6px;
  forced-color-adjust: none;
  outline: none;
  width: 250px;
  max-height: 300px;
  min-height: 100px;
  box-sizing: border-box;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
`;

const StyledListBoxItem = styled(ListBoxItem)`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black.off};
  background-color: ${({ theme }) => theme.colors.white};

  &[data-focus-visible] {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
  }

  &[data-selected] {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    &[data-focus-visible] {
      outline-color: ${({ theme }) => theme.colors.primary};
      outline-offset: -4px;
    }
  }
`;

type TasksListProps = {
  tasks: i.Task[];
};
