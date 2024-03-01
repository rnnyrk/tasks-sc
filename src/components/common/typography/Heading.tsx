'use client';

import type * as i from '@types';
import styled, { css } from 'styled-components';

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

function Heading({ children, variant = 'h1', ...props }: HeadingProps) {
  return (
    <>
      {variant === 'h1' && <Heading1 {...props}>{children}</Heading1>}
      {variant === 'h2' && <Heading2 {...props}>{children}</Heading2>}
      {variant === 'h3' && <Heading3 {...props}>{children}</Heading3>}
      {variant === 'h4' && <Heading4 {...props}>{children}</Heading4>}
    </>
  );
}

Heading.displayName = 'Button';

const HeadingCss = css<Omit<HeadingProps, 'children'>>`
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ variant }) => headingSizes[variant ?? 'h1'].mobile};
  line-height: ${({ lineHeight }) => lineHeight ?? '133%'};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.black)};
  margin: 0;
  text-align: ${({ align }) => align ?? 'left'};

  strong {
    font-weight: 500;
  }

  @media (min-width: 992px) {
    font-size: ${({ variant }) => headingSizes[variant ?? 'h1'].desktop};
  }
`;

const Heading1 = styled.h1<HeadingProps>`
  ${HeadingCss}
`;

const Heading2 = styled.h2<HeadingProps>`
  ${HeadingCss}
`;

const Heading3 = styled.h3<HeadingProps>`
  ${HeadingCss}
`;

const Heading4 = styled.h4<HeadingProps>`
  ${HeadingCss}
`;

export type HeadingProps = {
  align?: 'center' | 'left' | 'right';
  children: React.ReactNode;
  color?: i.ColorsFromTheme<'primary' | 'white'> | undefined;
  lineHeight?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
};

export { Heading };
