'use client';

import { Filters, FiltersState } from '@/types/filters';
import css from './Catalog.module.css';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { fetchCampers } from '@/services/campers';
import CamperList from './CamperList/CamperList';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

interface CatalogProps {
  filters: Filters;
  selectedFilters: FiltersState;
}

function Catalog({ filters, selectedFilters }: CatalogProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['campers', selectedFilters] as const,
      queryFn: ({ queryKey, pageParam }) => {
        const [, currentFiltersState] = queryKey;
        return fetchCampers(currentFiltersState, pageParam);
      },
      initialPageParam: 1,
      placeholderData: keepPreviousData,
      getNextPageParam: lastResponse => {
        const nextPage = lastResponse.page + 1;
        return nextPage <= lastResponse.totalPages ? nextPage : undefined;
      },
    });
  const rawCampers = data?.pages.flatMap(page => page.campers) ?? [];
  const campers = rawCampers.filter(
    (camper, index, self) => self.findIndex(c => c.id === camper.id) === index
  );
  const hasCampers = campers.length > 0;
  const showLoadingOverlay = isFetching && !isFetchingNextPage;

  return (
    <section className={css.catalog}>
      <SidebarFilter
        filters={filters}
        filterState={selectedFilters}
        key={JSON.stringify(selectedFilters)}
      />
      {showLoadingOverlay && (
        <LoadingOverlay>
          <h3 className={css.loaderTitle}>Loading trucks...</h3>
          <p className={css.loaderText}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </LoadingOverlay>
      )}
      {hasCampers && (
        <CamperList
          campers={campers}
          onLoadMore={() => fetchNextPage()}
          hasNextPage={hasNextPage}
          isLoadingMore={isFetchingNextPage}
        />
      )}
    </section>
  );
}

export default Catalog;
