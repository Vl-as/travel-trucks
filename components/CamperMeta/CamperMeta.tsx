import clsx from 'clsx';
import Icon from '../Icon/Icon';
import css from './CamperMeta.module.css';

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
  return (
    <div className={clsx(css.meta, className)}>
      <p className={css.rating}>
        <Icon className={css.iconStar} name="star" width={16} height={16} />
        <span>
          {rating}({totalReviews} {reviewsText})
        </span>
      </p>
      <p className={css.location}>
        <Icon className={css.iconMap} name="map" width={16} height={16} />
        {location}
      </p>
    </div>
  );
}

export default CamperMeta;
