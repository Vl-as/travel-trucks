import { getSingleCamper } from '@/services/campers';
import css from './CamperPage.module.css';
import Gallery from '@/components/Gallery/Gallery';
import CamperDetails from '@/components/CamperDetails/CamperDetails';
import CamperSummary from '@/components/CamperSummary/CamperSummary';
import Container from '@/components/Container/Container';
import { getCamperReviews } from '@/services/reviews';
import ReviewsBlock from '@/components/ReviewsBlock/ReviewsBlock';
import { notFound } from 'next/navigation';

interface CamperPageProps {
  params: Promise<{ id: string }>;
}

async function CamperPage({ params }: CamperPageProps) {
  const { id } = await params;
  const camper = await getSingleCamper(id);

  if (!camper) {
    notFound();
  }

  const reviews = await getCamperReviews(id);

  return (
    <main className={css.page}>
      <Container>
        <div className={css.topWrapper}>
          <Gallery
            gallery={camper.gallery}
            name={camper.name}
            className={css.gallery}
          />
          <div className={css.detailsBlock}>
            <CamperSummary className={css.summary} {...camper} />
            <CamperDetails camper={camper} />
          </div>
        </div>
        <div className={css.bottomWrapper}>
          <ReviewsBlock className={css.reviews} reviews={reviews} />
        </div>
      </Container>
    </main>
  );
}

export default CamperPage;
