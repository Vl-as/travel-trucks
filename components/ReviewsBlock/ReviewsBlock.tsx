import { Review } from '@/types/review';
import css from './ReviewsBlock.module.css';
import ReviewCard from './ReviewCard/ReviewCard';

interface ReviewsBlockProps {
  reviews: Review[];
  className?: string;
}

function ReviewsBlock({ reviews, className }: ReviewsBlockProps) {
  return (
    <article className={className}>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>
    </article>
  );
}

export default ReviewsBlock;
