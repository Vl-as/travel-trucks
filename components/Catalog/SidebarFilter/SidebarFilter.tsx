'use client';

import css from './SidebarFilter.module.css';
import FilterList from './FilterList/FilterList';
import SearchBox from './SearchBox/SearchBox';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { SyntheticEvent, useState } from 'react';
import { Filters, FiltersState } from '@/types/filters';

interface SidebarFilterProps {
  filters: Filters;
  filterState: FiltersState;
  onApply: (draftFilters: FiltersState) => void;
  onClear: () => void;
}

function SidebarFilter({
  filters,
  filterState,
  onApply,
  onClear,
}: SidebarFilterProps) {
  const [draftFilters, setDraftFilters] = useState(filterState);
  const [prevFilterState, setPrevFilterState] = useState(filterState);

  if (filterState !== prevFilterState) {
    setPrevFilterState(filterState);
    setDraftFilters(filterState);
  }

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

    const isChanged =
      draftFilters.location !== filterState.location ||
      draftFilters.engine !== filterState.engine ||
      draftFilters.form !== filterState.form ||
      draftFilters.transmission !== filterState.transmission;

    if (!isChanged) {
      return;
    }

    onApply(draftFilters);
  };

  const handleClear = () => {
    setDraftFilters({
      location: '',
      engine: null,
      form: null,
      transmission: null,
    });

    const hasAppliedFilters =
      filterState.location ||
      filterState.engine ||
      filterState.form ||
      filterState.transmission;

    if (!hasAppliedFilters) {
      return;
    }
    onClear();
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
