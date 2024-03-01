'use client';

import type * as i from '@types';
import { GridList, GridListItem, Text } from 'react-aria-components';
import styled from 'styled-components';

import { useDeleteTask } from '@queries/tasks';
import CrossSvg from '@vectors/cross.svg';
import { Checkbox } from '@common/form/Checkbox';
import { Button } from '@common/interaction/Button';

export function TasksList({ tasks }: TasksListProps) {
  const { mutateAsync, isPending } = useDeleteTask();

  async function onDeleteTask(taskId: string) {
    await mutateAsync(taskId);
  }

  return (
    <TasksListContainer>
      <GridList
        aria-label="Tasks"
        selectionMode="multiple"
      >
        {tasks.map((task) => (
          <GridListItem
            key={task.id}
            id={task.id}
            textValue={task.title}
          >
            <Checkbox slot="selection" />
            <span>{task.title}</span>
            {task.completed_at && <Text slot="description">{task.completed_at.toString()}</Text>}
            <Button
              aria-label="Delete"
              onPress={() => onDeleteTask(task.id)}
              isDisabled={isPending}
              $variant="icon"
            >
              <CrossSvg className="close" />
            </Button>
          </GridListItem>
        ))}
      </GridList>
    </TasksListContainer>
  );
}

const TasksListContainer = styled.div`
  width: 100%;

  .react-aria-GridList {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: inherit;
    overflow: auto;
    forced-color-adjust: none;
    box-sizing: border-box;
    outline-color: ${({ theme }) => theme.colors.white};

    &[data-focus-visible] {
      outline: 2px solid ${({ theme }) => theme.colors.white};
      outline-offset: -1px;
    }

    .react-aria-GridListItem {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem;
      margin-bottom: .2rem;
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      outline: none;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white};
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &[data-focus-visible] {
        background-color: ${({ theme }) => theme.colors.secondary.off};
        color: ${({ theme }) => theme.colors.black};
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: -2px;
      }

      &[data-pressed] {
        background-color: ${({ theme }) => theme.colors.secondary.off};
      }

      &[data-selected] {
        background-color: ${({ theme }) => theme.colors.primary.off};
        color: ${({ theme }) => theme.colors.black};
        --focus-ring-color: ${({ theme }) => theme.colors.primary};

        &[data-focus-visible] {
          background-color: ${({ theme }) => theme.colors.secondary.off};
          outline-color: ${({ theme }) => theme.colors.secondary};
          outline-offset: -4px;
        }

        .react-aria-Button {
          color: ${({ theme }) => theme.colors.white};
          fill: ${({ theme }) => theme.colors.white};
          --highlight-hover: rgb(255 255 255 / 0.1);
          --highlight-pressed: rgb(255 255 255 / 0.2);
        }
      }

      &[data-disabled] {
        color: ${({ theme }) => theme.colors.gray};
      }

      > div {
        display: flex;
        align-items: center;
        width: 100%;
      }

      span {
        flex: 2;
        font-size: 1.1rem;
        font-weight: 600;
        padding: 0 0.2rem;
      }

      .close {
        width: 1.2rem;
        height: 1.2rem;
      }

      .react-aria-Button:not([slot]) {
        margin-left: auto;
      }

      .react-aria-Button {
        background: transparent;
        border: none;
        font-size: 1.2rem;
        line-height: 1.2em;
        padding: 0.286rem 0.429rem;
        transition: background 200ms;

        &[data-hovered] {
          background: var(--highlight-hover);
        }

        &[data-pressed] {
          background: var(--highlight-pressed);
          box-shadow: none;
        }
      }
    }
`;

type TasksListProps = {
  tasks: i.Task[];
};
