import { ReactNode } from 'react';
import css from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  type,
  className,
  primary,
  secondary,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        css.button,
        className,
        primary && css.primary,
        secondary && css.secondary
      )}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
