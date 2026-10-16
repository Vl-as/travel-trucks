import Icon from '@/components/Icon/Icon';
import css from './ReviewCard.module.css';
import clsx from 'clsx';
import { Review } from '@/types/review';

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({
  review: { reviewer_name, reviewer_rating, comment },
}: ReviewCardProps) {
  return (
    <li className={css.card}>
      <div className={css.header}>
        <div className={css.avatar}>{reviewer_name[0]}</div>
        <div className={css.meta}>
          <p className={css.authorName}>{reviewer_name}</p>
          <ul className={css.starList}>
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <Icon
                  name="star"
                  className={clsx(
                    index < reviewer_rating
                      ? css.iconStarActive
                      : css.iconStarEmpty
                  )}
                  width={16}
                  height={16}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </li>
  );
}

export default ReviewCard;
