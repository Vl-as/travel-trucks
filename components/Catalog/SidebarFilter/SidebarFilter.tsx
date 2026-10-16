'use client';

import css from './SidebarFilter.module.css';
import FilterList from './FilterList/FilterList';
import SearchBox from './SearchBox/SearchBox';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { SyntheticEvent, useState } from 'react';
import { Filters, FiltersState } from '@/types/filters';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

interface SidebarFilterProps {
  filters: Filters;
  filterState: FiltersState;
}

function SidebarFilter({ filters, filterState }: SidebarFilterProps) {
  const [draftFilters, setDraftFilters] = useState(filterState);
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleFilterChange = (name: keyof FiltersState, value: string) => {
    setDraftFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLocationChange = (value: string) => {
    setDraftFilters(prev => ({
      ...prev,
      location: value,
    }));
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

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

  const handleClear = () => {
    queryClient.removeQueries({ queryKey: ['campers'] });

    router.replace('/catalog', {
      scroll: false,
    });

    setDraftFilters({
      location: '',
      engine: null,
      form: null,
      transmission: null,
    });
  };

  return (
    <aside className={css.aside}>
      <form onSubmit={handleSubmit}>
        <SearchBox
          className={css.searchBox}
          value={draftFilters.location ?? ''}
          onChange={handleLocationChange}
        />
        <h2 className={css.title}>Filters</h2>
        <FilterList
          className={css.filterList}
          title="Camper form"
          filters={filters.forms}
          name="form"
          value={draftFilters.form}
          onChange={value => handleFilterChange('form', value)}
        />
        <FilterList
          className={css.filterList}
          title="Engine"
          filters={filters.engines}
          name="engine"
          value={draftFilters.engine}
          onChange={value => handleFilterChange('engine', value)}
        />
        <FilterList
          className={css.filterList}
          title="Transmission"
          filters={filters.transmissions}
          name="transmission"
          value={draftFilters.transmission}
          onChange={value => handleFilterChange('transmission', value)}
        />
        <Button className={css.searchButton} type="submit">
          Search
        </Button>
        <Button variant="secondary" onClick={handleClear} type="button">
          <Icon className={css.icon} name="cross" width={24} height={24} />
          Clear filters
        </Button>
      </form>
    </aside>
  );
}

export default SidebarFilter;
