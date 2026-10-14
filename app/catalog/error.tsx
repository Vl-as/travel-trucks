'use client';

import Button from '@/components/Button/Button';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h2>Error loading</h2>
      <p>{error.message}</p>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}

export default Error;
