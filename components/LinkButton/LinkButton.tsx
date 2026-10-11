import Link, { LinkProps } from 'next/link';
import css from './LinkButton.module.css';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface LinkButtonProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

function LinkButton({ href, className, children, ...props }: LinkButtonProps) {
  return (
    <Link className={clsx(css.linkButton, className)} href={href} {...props}>
      {children}
    </Link>
  );
}

export default LinkButton;
