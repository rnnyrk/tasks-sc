import { Checkbox as CheckboxAria, type CheckboxProps } from 'react-aria-components';
import styled from 'styled-components';

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <CheckboxWrapper>
      <CheckboxAria {...props}>
        {({ isIndeterminate }) => (
          <>
            <div className="checkbox">
              <svg
                viewBox="0 0 18 18"
                aria-hidden="true"
              >
                {isIndeterminate ? (
                  <rect
                    x={1}
                    y={7.5}
                    width={15}
                    height={3}
                  />
                ) : (
                  <polyline points="1 9 7 14 15 4" />
                )}
              </svg>
            </div>
            {children}
          </>
        )}
      </CheckboxAria>
    </CheckboxWrapper>
  );
}

export const CheckboxWrapper = styled.div`
  display: flex;

  .react-aria-Checkbox {
    --selected-color: ${({ theme }) => theme.colors.primary};
    --selected-color-pressed: ${({ theme }) => theme.colors.secondary};
    --checkmark-color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    gap: 0.571rem;
    font-size: 1.143rem;
    color: var(--text-color);
    forced-color-adjust: none;

    .checkbox {
      width: 1.6rem;
      height: 1.6rem;
      background-color: ${({ theme }) => theme.colors.primary.off};
      border-radius: 4px;
      transition: all 200ms;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 1rem;
      height: 1rem;
      fill: none;
      stroke: ${({ theme }) => theme.colors.white};
      stroke-width: 3px;
      stroke-dasharray: 22px;
      stroke-dashoffset: 66;
      transition: all 200ms;
    }

    &[data-pressed] .checkbox {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &[data-focus-visible] .checkbox {
      outline: 2px solid ${({ theme }) => theme.colors.secondary};
      outline-offset: 2px;
    }

    &[data-selected],
    &[data-indeterminate] {
      .checkbox {
        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.primary};
      }

      &[data-pressed] .checkbox {
        border-color: ${({ theme }) => theme.colors.primary.off};
        background: ${({ theme }) => theme.colors.primary.off};
      }

      svg {
        stroke-dashoffset: 44;
      }
    }

    &[data-indeterminate] {
      & svg {
        stroke: none;
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
