'use client';

import type * as i from '@types';
import { useState } from 'react';
import { ListBox, ListBoxItem } from 'react-aria-components';
import styled from 'styled-components';

export function Task({ task }: TaskProps) {
  function onDeleteTask(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    console.log('delete task');
  }

  return (
    <TaskItemContainer>
      <div>
        <strong>{task.title}</strong>
        {task.completed_at && <span>{task.completed_at.toString()}</span>}
      </div>
      <button onClick={onDeleteTask}>Delete</button>
    </TaskItemContainer>
  );
}

export const TaskItemContainer = styled.div`
  display: flex;
  appearance: none;
  padding: 0.6rem;
  width: 100%;
  font-size: 1.1rem;

  > div {
    flex: 2;
  }
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
    <TasksListContainer>
      <ListBox
        aria-label="Tasks"
        selectionMode="multiple"
        // onSelectionChange={onSetItems}
      >
        {tasks.map((task) => (
          <ListBoxItem
            key={task.id}
            id={task.id}
            aria-label={task.title}
            textValue={task.title}
          >
            <Task task={task} />
          </ListBoxItem>
        ))}
      </ListBox>
    </TasksListContainer>
  );
}

const TasksListContainer = styled.div`
  width: 100%;

  .react-aria-ListBox {
    display: flex;
    gap: 0.2rem;
    flex-direction: column;
    max-height: inherit;
    overflow: auto;
    forced-color-adjust: none;
    outline: none;

    &[data-focus-visible] {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: -1px;
    }
  }

  .react-aria-ListBoxItem {
    width: 100%;
    padding: 0.2rem 0.5rem;
    border-radius: 0.4rem;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    position: relative;
    display: flex;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white.bg};

    &:hover,
    &[data-focus-visible] {
      background-color: ${({ theme }) => theme.colors.primary.off};
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: -2px;
    }

    &[data-selected] {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};

      &[data-focus-visible] {
        background-color: ${({ theme }) => theme.colors.secondary.off};
        color: ${({ theme }) => theme.colors.black};
        outline-color: ${({ theme }) => theme.colors.secondary};
        outline-offset: -4px;
      }
    }
  }
`;

type TasksListProps = {
  tasks: i.Task[];
};
