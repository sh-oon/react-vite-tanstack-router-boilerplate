import { Button } from '@mono/ui-components';
import * as stylex from '@stylexjs/stylex';
import { createFileRoute } from '@tanstack/react-router';
import { spacing } from '../styles/tokens.stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: spacing.lg,
    padding: spacing.lg,
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.125rem',
    opacity: 0.7,
  },
  buttons: {
    display: 'flex',
    gap: spacing.md,
  },
});

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>Bomb Vite Monorepo</h1>
      <p {...stylex.props(styles.description)}>React + Vite + StyleX + TanStack Router</p>
      <div {...stylex.props(styles.buttons)}>
        <Button>Get Started</Button>
        <Button variant="secondary">Documentation</Button>
      </div>
    </div>
  );
}
