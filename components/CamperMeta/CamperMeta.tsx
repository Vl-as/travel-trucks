import clsx from 'clsx';
import Icon from '../Icon/Icon';
import css from './CamperMeta.module.css';
import { formatLocation } from '@/utils/formatters';

interface CamperMetaProps {
  rating: number;
  totalReviews: number;
  location: string;
  className?: string;
}

function CamperMeta({
  rating,
  totalReviews,
  location,
  className,
}: CamperMetaProps) {
  const reviewsText = totalReviews === 1 ? 'Review' : 'Reviews';
  const displayLocation = formatLocation(location);
  return (
    <div className={clsx(css.meta, className)}>
      <p className={css.rating}>
        <Icon
          className={css.iconStar}
          name="star"
          width={16}
          height={16}
          aria-hidden="true"
        />
        <span>
          {rating}({totalReviews} {reviewsText})
        </span>
      </p>
      <p className={css.location}>
        <Icon
          className={css.iconMap}
          name="map"
          width={16}
          height={16}
          aria-hidden="true"
        />
        {displayLocation}
      </p>
    </div>
  );
}

export default CamperMeta;
