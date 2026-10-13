'use client';

import css from './SidebarFilter.module.css';
import FilterList from './FilterList/FilterList';
import SearchBox from './SearchBox/SearchBox';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { SubmitEvent, useRef } from 'react';
import { Filters, FiltersState, initialFiltersState } from '@/types/filters';

interface SidebarFilterProps {
  filters: Filters;
  onFiltersChange: (value: FiltersState) => void;
}

function SidebarFilter({ filters, onFiltersChange }: SidebarFilterProps) {
  const refForm = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const getValue = (name: string) => formData.get(name)?.toString() ?? null;

    onFiltersChange({
      location: getValue('location'),
      engine: getValue('engine'),
      form: getValue('form'),
      transmission: getValue('transmission'),
    });
  };

  const handleReset = () => {
    refForm.current?.reset();
    onFiltersChange(initialFiltersState);
  };

  return (
    <aside className={css.aside}>
      <form ref={refForm} onSubmit={handleSubmit}>
        <SearchBox className={css.searchBox} />
        <h2 className={css.title}>Filters</h2>
        <FilterList
          className={css.filterList}
          title="Camper form"
          filters={filters.forms}
          name="form"
        />
        <FilterList
          className={css.filterList}
          title="Engine"
          filters={filters.engines}
          name="engine"
        />
        <FilterList
          className={css.filterList}
          title="Transmission"
          filters={filters.transmissions}
          name="transmission"
        />
        <Button className={css.searchButton} type="submit">
          Search
        </Button>
        <Button variant="secondary" onClick={handleReset} type="button">
          <Icon className={css.icon} name="cross" width={24} height={24} />
          Clear filters
        </Button>
      </form>
    </aside>
  );
}

export default SidebarFilter;
