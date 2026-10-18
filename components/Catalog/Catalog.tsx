'use client';

import { Filters, FiltersState } from '@/types/filters';
import css from './Catalog.module.css';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import {
  keepPreviousData,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { fetchCampers } from '@/services/campers';
import CamperList from './CamperList/CamperList';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import { useRouter } from 'next/navigation';
import NotFoundCampers from './NotFoundCampers/NotFoundCampers';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Toast from '../Toast/Toast';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

interface CatalogProps {
  filters: Filters;
  selectedFilters: FiltersState;
}

function Catalog({ filters, selectedFilters }: CatalogProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteQuery({
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

  const applyFilters = (draftFilters: FiltersState) => {
    queryClient.removeQueries({ queryKey: ['campers'] });

    const params = new URLSearchParams();

    Object.entries(draftFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    router.replace(`/catalog?${params.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    if (isError) {
      toast(
        <Toast
          type="error"
          message="Failed to load campers list. Please try again."
        />
      );
    }
  }, [isError]);

  const clearAllValues = () => {
    queryClient.removeQueries({ queryKey: ['campers'] });
    router.replace('/catalog', {
      scroll: false,
    });
  };

  const clearOnlyFilters = () => {
    queryClient.removeQueries({ queryKey: ['campers'] });
    if (selectedFilters.location) {
      router.replace(
        `/catalog?location=${encodeURIComponent(selectedFilters.location)}`,
        {
          scroll: false,
        }
      );
    } else {
      router.replace('/catalog', {
        scroll: false,
      });
    }
  };

  const rawCampers = data?.pages.flatMap(page => page.campers) ?? [];
  const campers = rawCampers.filter(
    (camper, index, self) => self.findIndex(c => c.id === camper.id) === index
  );
  const hasCampers = campers.length > 0;
  const showLoadingOverlay = isFetching && !isFetchingNextPage;

  return (
    <section className={css.catalog}>
      <Button
        className={css.mobileFilterToggle}
        onClick={() => setIsFiltersOpen(prev => !prev)}
        type="button"
        variant="secondary"
      >
        Filters
        <Icon name="filter" width={20} height={20} />
      </Button>
      <div
        className={clsx(css.backdrop, { [css.backdropOpen]: isFiltersOpen })}
        onClick={() => setIsFiltersOpen(false)}
      />
      <SidebarFilter
        filters={filters}
        filterState={selectedFilters}
        key={JSON.stringify(selectedFilters)}
        onApply={applyFilters}
        onClear={clearAllValues}
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
      />
      {showLoadingOverlay && (
        <LoadingOverlay>
          <h3 className={css.loaderTitle}>Loading trucks...</h3>
          <p className={css.loaderText}>
            Please wait while we fetch the best travel trucks for you
          </p>
        </LoadingOverlay>
      )}
      {hasCampers ? (
        <CamperList
          campers={campers}
          onLoadMore={() => fetchNextPage()}
          hasNextPage={hasNextPage}
          isLoadingMore={isFetchingNextPage}
        />
      ) : (
        !isLoading && (
          <NotFoundCampers onClear={clearOnlyFilters} onView={clearAllValues} />
        )
      )}
    </section>
  );
}

export default Catalog;
