import clsx from 'clsx';
import css from './Icon.module.css';

interface IconProps {
  name: string;
  className?: string;
  height?: number;
  width?: number;
}

function Icon({ name, className, width = 20, height = 20 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={clsx(css.icon, className)}
      aria-hidden="true"
    >
      <use href={`/sprite.svg#icon-${name}`} />
    </svg>
  );
}

export default Icon;
