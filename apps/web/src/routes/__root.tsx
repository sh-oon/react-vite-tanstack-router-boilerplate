import * as stylex from '@stylexjs/stylex';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { colors, fonts } from '../styles/tokens.stylex';

const styles = stylex.create({
  root: {
    backgroundColor: colors.background,
    color: colors.foreground,
    fontFamily: fonts.sans,
    minHeight: '100vh',
    WebkitFontSmoothing: 'antialiased',
  },
});

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div {...stylex.props(styles.root)}>
      <Outlet />
    </div>
  );
}
