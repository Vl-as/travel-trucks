import { Camper } from '@/types/camper';
import css from './CamperList.module.css';
import CamperCard from './CamperCard/CamperCard';
import Button from '@/components/Button/Button';

interface CamperListProps {
  campers: Camper[];
  onLoadMore: () => void;
  hasNextPage: boolean;
  isLoadingMore: boolean;
}

function CamperList({
  campers,
  onLoadMore,
  hasNextPage,
  isLoadingMore,
}: CamperListProps) {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {campers.map(camper => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>
      {hasNextPage && (
        <Button
          className={css.button}
          type="button"
          variant="secondary"
          onClick={onLoadMore}
          disabled={isLoadingMore}
        >
          {isLoadingMore ? (
            <>
              Loading <span className={css.loader} aria-label="Loading"></span>
            </>
          ) : (
            'Load more'
          )}
        </Button>
      )}
    </div>
  );
}

export default CamperList;
