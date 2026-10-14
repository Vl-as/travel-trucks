import { ReactNode } from 'react';
import css from './LoadingOverlay.module.css';

interface LoadingOverlayProps {
  children: ReactNode;
}

function LoadingOverlay({ children }: LoadingOverlayProps) {
  return (
    <div className={css.overlay}>
      <div className={css.content}>
        <div className={css.loader}></div>
        {children}
      </div>
    </div>
  );
}

export default LoadingOverlay;
