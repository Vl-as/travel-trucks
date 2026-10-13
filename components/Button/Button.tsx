import { ButtonHTMLAttributes, ReactNode } from 'react';
import css from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(css.button, css[variant], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
