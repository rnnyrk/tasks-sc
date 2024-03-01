import 'styled-components';

import type * as i from '@types';

declare module 'styled-components' {
  export interface DefaultTheme extends i.Theme {
    theme: 'default';
  }
}
