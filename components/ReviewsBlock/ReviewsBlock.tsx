import { Review } from '@/types/review';
import css from './ReviewsBlock.module.css';
import ReviewCard from './ReviewCard/ReviewCard';

interface ReviewsBlockProps {
  reviews: Review[];
  className?: string;
}

function ReviewsBlock({ reviews, className }: ReviewsBlockProps) {
  const hasReviews = Boolean(reviews && reviews.length > 0);
  return (
    <article className={className}>
      <h2 className={css.title}>Reviews</h2>
      {hasReviews ? (
        <ul className={css.list}>
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>
      ) : (
        <div className={css.emptyReviewsCard}>
          <p className={css.emptyTitle}>No reviews yet</p>
          <p className={css.emptyText}>
            Be the first to rent this campervan and share your travel experience
            with others!
          </p>
        </div>
      )}
    </article>
  );
}

export default ReviewsBlock;
