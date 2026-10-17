'use client';

import Button from '@/components/Button/Button';
import css from './Error.module.css';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <main className={css.main}>
      <div className={css.card}>
        <h2 className={css.title}>Error loading</h2>
        <p className={css.text}>{error.message}</p>
        <Button className={css.button} type="button" onClick={reset}>
          Try again
        </Button>
      </div>
    </main>
  );
}

export default Error;
