'use client';

import { Filters, FiltersState, initialFiltersState } from '@/types/filters';
import css from './Catalog.module.css';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { fetchCampers } from '@/services/campers';
import CamperList from './CamperList/CamperList';
import { useState } from 'react';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

interface CatalogProps {
  filters: Filters;
}

function Catalog({ filters }: CatalogProps) {
  const [filtersState, setFiltersState] =
    useState<FiltersState>(initialFiltersState);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['campers', filtersState] as const,
      queryFn: ({ queryKey, pageParam }) => {
        const [, currentFiltersState] = queryKey;
        return fetchCampers(currentFiltersState, pageParam);
      },
      initialPageParam: 1,
      placeholderData: keepPreviousData,
      gcTime: 0,
      getNextPageParam: lastResponse => {
        const nextPage = lastResponse.page + 1;
        return nextPage <= lastResponse.totalPages ? nextPage : undefined;
      },
      select: data => {
        return {
          ...data,
          campers: data.pages.flatMap(page => page.campers),
        };
      },
    });
  const campers = data?.campers ?? [];
  const hasCampers = campers.length > 0;
  const showLoadingOverlay = isFetching && !isFetchingNextPage;

  return (
    <section className={css.catalog}>
      <SidebarFilter filters={filters} onFiltersChange={setFiltersState} />
      {showLoadingOverlay && (
        <LoadingOverlay>
          <h3 className={css.loaderTitle}>Loading tracks...</h3>
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
