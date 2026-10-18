import { getSingleCamper } from '@/services/campers';
import css from './CamperPage.module.css';
import Gallery from '@/components/Gallery/Gallery';
import CamperDetails from '@/components/CamperDetails/CamperDetails';
import CamperSummary from '@/components/CamperSummary/CamperSummary';
import Container from '@/components/Container/Container';
import { getCamperReviews } from '@/services/reviews';
import ReviewsBlock from '@/components/ReviewsBlock/ReviewsBlock';
import { notFound } from 'next/navigation';
import BookingForm from '@/components/BookingForm/BookingForm';
import { Metadata } from 'next';

interface CamperPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CamperPageProps): Promise<Metadata> {
  const { id } = await params;
  const camper = await getSingleCamper(id);

  if (!camper) {
    return {
      title: 'Camper van not found | TravelTrucks',
    };
  }

  const title = `${camper.name} — Rent for €${camper.price}`;
  const description =
    camper.description.length > 150
      ? `${camper.description.slice(0, 150)}...`
      : camper.description;

  const imageUrl = camper.gallery?.[0]?.original || '/og-main.webp';

  return {
    title: `${camper.name} | TravelTrucks`,
    description,
    openGraph: {
      title,
      description,
      url: `https://travel-trucks-pink-psi.vercel.app/catalog/${id}`,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: camper.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
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
      <Container className={css.container}>
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
          <BookingForm className={css.form} camperId={id} />
        </div>
      </Container>
    </main>
  );
}

export default CamperPage;
