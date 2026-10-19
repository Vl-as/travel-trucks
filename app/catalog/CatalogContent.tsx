import Catalog from '@/components/Catalog/Catalog';
import { fetchCampers } from '@/services/campers';
import { fetchFilters } from '@/services/filters';
import type { FiltersState } from '@/types/filters';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface Props {
  searchParams: Promise<{
    location?: string;
    engine?: string;
    form?: string;
    transmission?: string;
  }>;
}

export default async function CatalogContent({ searchParams }: Props) {
  const [filters, params] = await Promise.all([fetchFilters(), searchParams]);

  const queryClient = new QueryClient();

  const selectedFilters: FiltersState = {
    location: params.location ?? '',
    engine: params.engine ?? null,
    form: params.form ?? null,
    transmission: params.transmission ?? null,
  };

  await queryClient
    .infiniteQuery({
      queryKey: ['campers', selectedFilters],
      queryFn: ({ pageParam }) => fetchCampers(selectedFilters, pageParam),
      initialPageParam: 1,
    })
    .catch(() => {});

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Catalog filters={filters} selectedFilters={selectedFilters} />
    </HydrationBoundary>
  );
}
