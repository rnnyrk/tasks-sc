'use client';

import { forwardRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import styled from 'styled-components';

const Label = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ ...props }, ref) => (
  <StyledLabel
    ref={ref}
    {...props}
  />
));

Label.displayName = 'Label';

const StyledLabel = styled(LabelPrimitive.Root)`
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
`;

export { Label };
