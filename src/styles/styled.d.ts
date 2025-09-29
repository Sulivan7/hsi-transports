import 'styled-components';
import { ThemeColors } from './globalStyles';
type LightTheme = (typeof ThemeColors)['light'];

declare module 'styled-components' {
  export interface DefaultTheme extends LightTheme {
    mode: 'light' | 'dark';
  }
}
