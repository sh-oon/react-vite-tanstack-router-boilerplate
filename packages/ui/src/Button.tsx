import type { ButtonHTMLAttributes } from 'react';
import * as stylex from '@stylexjs/stylex';

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const styles = stylex.create({
  base: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  primary: {
    backgroundColor: '#0070f3',
    color: '#ffffff',
  },
  secondary: {
    backgroundColor: '#f5f5f5',
    color: '#333333',
  },
  hover: {
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
  },
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    ':hover': {
      transform: 'none',
      boxShadow: 'none',
    },
  },
});

export function Button({ variant = 'primary', disabled, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      {...stylex.props(
        styles.base,
        styles[variant],
        !disabled && styles.hover,
        disabled && styles.disabled
      )}
      {...props}
    >
      {children}
    </button>
  );
}
