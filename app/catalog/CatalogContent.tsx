import Catalog from '@/components/Catalog/Catalog';
import { fetchFilters } from '@/services/filters';
import type { FiltersState } from '@/types/filters';

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

  const selectedFilters: FiltersState = {
    location: params.location ?? '',
    engine: params.engine ?? null,
    form: params.form ?? null,
    transmission: params.transmission ?? null,
  };

  return <Catalog filters={filters} selectedFilters={selectedFilters} />;
}
