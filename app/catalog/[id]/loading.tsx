import css from './Loading.module.css';
import LoadingOverlay from '@/components/LoadingOverlay/LoadingOverlay';

function Loading() {
  return (
    <LoadingOverlay>
      <h3 className={css.loaderTitle}>Loading camper...</h3>
      <p className={css.loaderText}>
        Please wait while we prepare camper details
      </p>
    </LoadingOverlay>
  );
}

export default Loading;
