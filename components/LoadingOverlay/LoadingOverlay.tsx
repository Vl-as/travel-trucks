import css from './LoadingOverlay.module.css';

function LoadingOverlay() {
  return (
    <div className={css.overlay}>
      <div className={css.content}>
        <div className={css.loader}></div>
        <h3 className={css.title}>Loading tracks...</h3>
        <p className={css.text}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
}

export default LoadingOverlay;
