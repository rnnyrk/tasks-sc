'use client';

import type * as i from '@types';
import { useState } from 'react';
import Link from 'next/link';
import { GridList, GridListItem, Text, type Selection } from 'react-aria-components';
import styled from 'styled-components';

import { useDeleteTask, useUpdateTask } from '@queries/tasks';
import { formatDate } from '@utils/dates';
import CloseSvg from '@vectors/close.svg';
import PenSvg from '@vectors/pen.svg';
import { Checkbox } from '@common/form/Checkbox';
import { Button } from '@common/interaction/Button';

export function TasksList({ tasks }: TasksListProps) {
  const { mutateAsync: onDelete, isPending: isDeleting } = useDeleteTask();
  const { mutateAsync: onUpdate, isPending: isUpdating } = useUpdateTask();

  const [selectedTasks, setSelectedTasks] = useState<Selection>(
    new Set(tasks.filter((task) => task.completed_at).map((task) => task.id) || []),
  );

  async function onDeleteTask(taskId: string) {
    await onDelete(taskId);
  }

  async function onChangeState(isSelected: boolean, taskId: string) {
    await onUpdate({
      taskId,
      values: {
        completed_at: isSelected ? new Date() : null,
      },
    });
  }

  async function onSelectionChange(newTasks: Selection) {
    if (newTasks === 'all') return;

    let difference = Array.from(new Set([...selectedTasks].filter((x) => !newTasks.has(x))));
    if (!difference.length && selectedTasks !== 'all') {
      difference = Array.from(new Set([...newTasks].filter((x) => !selectedTasks.has(x))));
    }

    for (const key of difference) {
      const completedAt = tasks.find((task) => task.id === key)?.completed_at;
      await onChangeState(!completedAt, key as string);
      setSelectedTasks(newTasks);
    }
  }

  return (
    <TasksListContainer>
      <GridList
        aria-label="Tasks"
        selectionMode="multiple"
        selectedKeys={selectedTasks}
        onSelectionChange={onSelectionChange}
      >
        {tasks.map((task) => (
          <GridListItem
            key={task.id}
            id={task.id}
            textValue={task.title}
          >
            <Checkbox slot="selection" />
            <StyledListContent>
              <strong>{task.title}</strong>
              {task.completed_at && (
                <StyledDate slot="description">
                  {formatDate(task.completed_at, 'd MMMM yyyy HH:mm')}
                </StyledDate>
              )}
            </StyledListContent>
            <Link href={`/edit/${task.id}`}>
              <Button
                aria-label="Edit"
                $variant="icon"
              >
                <PenSvg className="icon" />
              </Button>
            </Link>
            <Button
              aria-label="Delete"
              onPress={() => onDeleteTask(task.id)}
              isDisabled={isDeleting || isUpdating}
              $variant="icon"
            >
              <CloseSvg className="icon" />
            </Button>
          </GridListItem>
        ))}
      </GridList>
    </TasksListContainer>
  );
}

const StyledListContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const StyledDate = styled(Text)`
  font-size: 12px;
`;

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

      .icon {
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
