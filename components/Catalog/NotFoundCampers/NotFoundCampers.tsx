import css from './NotFoundCampers.module.css';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import NotFound from '@/components/NotFound/NotFound';

interface NotFoundCampersProps {
  onClear: () => void;
  onView: () => void;
}

function NotFoundCampers({ onClear, onView }: NotFoundCampersProps) {
  return (
    <NotFound title="No campers found">
      <p className={css.text}>
        We couldn&apos;t find any campers that match your filters. Try adjusting
        your search or clearing some filters.
      </p>
      <div className={css.buttonsWrapper}>
        <Button
          onClick={onClear}
          className={css.button}
          type="button"
          variant="secondary"
        >
          <Icon className={css.icon} name="cross" width={24} height={24} />
          Clear filters
        </Button>
        <Button onClick={onView} className={css.button} type="button">
          View all campers
        </Button>
      </div>
    </NotFound>
  );
}

export default NotFoundCampers;
