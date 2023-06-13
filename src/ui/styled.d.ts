import 'styled-components';
import { Typegraphy, Color } from 'src/types/ui';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [key in Color]: string;
    };
    typography: {
      [key in Typegraphy]: number;
    };
  }
}
