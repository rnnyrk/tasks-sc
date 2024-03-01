'use client';

import { Label as LabelAria } from 'react-aria-components';
import styled from 'styled-components';

function Label({ children, id }: LabelProps) {
  return (
    <LabelAria
      htmlFor={id}
      aria-labelledby={children}
    >
      <StyledLabel>{children}</StyledLabel>
    </LabelAria>
  );
}

Label.displayName = 'Label';

const StyledLabel = styled.span`
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
`;

type LabelProps = {
  children: string;
  id?: string;
};

export { Label };
