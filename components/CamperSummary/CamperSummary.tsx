import clsx from 'clsx';
import CamperMeta from '../CamperMeta/CamperMeta';
import css from './CamperSummary.module.css';

interface CamperSummaryProps {
  name: string;
  price: number;
  description: string;
  rating: number;
  totalReviews: number;
  location: string;
  className?: string;
}

function CamperSummary({
  name,
  price,
  description,
  rating,
  totalReviews,
  location,
  className
}: CamperSummaryProps) {
  return (
    <div className={clsx(css.card, className)}>
      <h1 className={css.name}>{name}</h1>
      <CamperMeta
        rating={rating}
        totalReviews={totalReviews}
        location={location}
        className={css.meta}
      />
      <p className={css.price}>€{price}</p>
      <p className={css.description}>{description}</p>
    </div>
  );
}

export default CamperSummary;
