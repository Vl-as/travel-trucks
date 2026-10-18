import Image from 'next/image';
import css from './NotFound.module.css';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface NotFoundProps {
  title: string;
  children?: ReactNode;
  titleClass?: string;
  imgClass?: string;
}

function NotFound({ children, title, imgClass, titleClass }: NotFoundProps) {
  return (
    <div className={css.container}>
      <Image
        className={clsx(css.image, imgClass)}
        src="/not-found.webp"
        alt={title}
        width={488}
        height={463}
        priority
      />
      <h2 className={clsx(css.title, titleClass)}>{title}</h2>
      {children}
    </div>
  );
}
export default NotFound;
