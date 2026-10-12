'use client';

import css from './SidebarFilter.module.css';
import FilterList from './FilterList/FilterList';
import SearchBox from './SearchBox/SearchBox';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { SubmitEvent } from 'react';
import { Filters, FiltersState } from '@/types/filters';

interface SidebarFilterProps {
  filters: Filters;
  setFiltersState: (value: FiltersState) => void;
}

function SidebarFilter({ filters, setFiltersState }: SidebarFilterProps) {
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = formData.get('form')?.toString() ?? null;
    const engine = formData.get('engine')?.toString() ?? null;
    const transmission = formData.get('transmission')?.toString() ?? null;
    const location = formData.get('location')?.toString() ?? null;

    setFiltersState({ location, engine, form, transmission });
  };

  function handleReset() {
    setFiltersState({
      location: null,
      engine: null,
      form: null,
      transmission: null,
    });
  }

  return (
    <aside className={css.aside}>
      <form onSubmit={handleSubmit}>
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
        <Button className={css.searchButton} type="submit" primary>
          Search
        </Button>
        <Button type="reset" secondary onClick={handleReset}>
          <Icon className={css.icon} name="cross" width={24} height={24} />
          Clear filters
        </Button>
      </form>
    </aside>
  );
}

export default SidebarFilter;
