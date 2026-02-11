import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  background: '#ffffff',
  foreground: '#171717',
  primary: '#0070f3',
  primaryText: '#ffffff',
  secondary: '#f5f5f5',
  secondaryText: '#333333',
});

export const fonts = stylex.defineVars({
  sans: 'Arial, Helvetica, sans-serif',
});

export const spacing = stylex.defineVars({
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
});
