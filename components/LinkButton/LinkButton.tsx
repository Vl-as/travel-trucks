import Link from 'next/link';
import css from './LinkButton.module.css';
import { ComponentProps } from 'react';
import clsx from 'clsx';

type LinkButtonProps = ComponentProps<typeof Link>;

function LinkButton({ href, className, children, ...props }: LinkButtonProps) {
  return (
    <Link className={clsx(css.linkButton, className)} href={href} {...props}>
      {children}
    </Link>
  );
}

export default LinkButton;
