'use client';

import { Label as LabelAria } from 'react-aria-components';
import styled from 'styled-components';

function Label({ children }: LabelProps) {
  return <StyledLabel>{children}</StyledLabel>;
}

Label.displayName = 'Label';

const StyledLabel = styled(LabelAria)`
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
`;

type LabelProps = {
  children: React.ReactNode;
};

export { Label };
