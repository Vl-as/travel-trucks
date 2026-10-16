import css from './CatalogPage.module.css';
import Container from '../../components/Container/Container';
import { Suspense } from 'react';
import CatalogContent from './CatalogContent';

interface Props {
  searchParams: Promise<{
    location?: string;
    engine?: string;
    form?: string;
    transmission?: string;
  }>;
}

export default function CatalogPage({ searchParams }: Props) {
  return (
    <main className={css.page}>
      <Container>
        <Suspense fallback={null}>
          <CatalogContent searchParams={searchParams} />
        </Suspense>
      </Container>
    </main>
  );
}
