'use client';

import type * as i from '@types';
import styled from 'styled-components';

const headingSizes = {
  h1: {
    mobile: '32px',
    desktop: '40px',
  },
  h2: {
    mobile: '28px',
    desktop: '32px',
  },
  h3: {
    mobile: '24px',
    desktop: '28px',
  },
  h4: {
    mobile: '20px',
    desktop: '24px',
  },
};

function Heading({ children, $variant = 'h1', ...props }: HeadingProps) {
  return (
    <>
      <StyledHeading
        as={$variant}
        $variant={$variant}
        {...props}
      >
        {children}
      </StyledHeading>
    </>
  );
}

Heading.displayName = 'Button';

const StyledHeading = styled.h1<HeadingProps>`
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ $variant }) => headingSizes[$variant ?? 'h1'].mobile};
  line-height: ${({ $lineHeight }) => $lineHeight ?? '133%'};
  color: ${({ theme, $color }) => ($color ? theme.colors[$color] : theme.colors.black)};
  margin: 0;
  text-align: ${({ $align }) => $align ?? 'left'};

  strong {
    font-weight: 500;
  }

  @media (min-width: 992px) {
    font-size: ${({ $variant }) => headingSizes[$variant ?? 'h1'].desktop};
  }
`;

export type HeadingProps = {
  $align?: 'center' | 'left' | 'right';
  children: React.ReactNode;
  $color?: i.ColorsFromTheme<'primary' | 'white'> | undefined;
  $lineHeight?: string;
  $variant?: 'h1' | 'h2' | 'h3' | 'h4';
};

export { Heading };
