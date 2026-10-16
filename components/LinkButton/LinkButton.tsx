import Link from 'next/link';
import css from './LinkButton.module.css';
import { ComponentProps } from 'react';
import clsx from 'clsx';

interface LinkButtonProps extends ComponentProps<typeof Link> {
  variant?: string;
}

function LinkButton({
  href,
  className,
  children,
  variant = 'primary',
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={clsx(css.linkButton, css[variant], className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
