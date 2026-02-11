import * as stylex from '@stylexjs/stylex';
import { colors, fonts } from './tokens.stylex';

export const globalStyles = stylex.create({
  reset: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: colors.background,
    color: colors.foreground,
    fontFamily: fonts.sans,
    WebkitFontSmoothing: 'antialiased',
  },
});
