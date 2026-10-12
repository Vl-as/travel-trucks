'use client';

import { Filters, FiltersState } from '@/types/filters';
import css from './Catalog.modulle.css';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { useQuery } from '@tanstack/react-query';
import { fetchCampers } from '@/services/campers';
import CamperList from './CamperList/CamperList';
import { useState } from 'react';

interface CatalogProps {
  filters: Filters;
}

function Catalog({ filters }: CatalogProps) {
  const [filtersState, setFiltersState] = useState<FiltersState>({
    location: null,
    form: null,
    transmission: null,
    engine: null,
  });

  const { data } = useQuery({
    queryKey: ['campers', filtersState],
    queryFn: () => fetchCampers(filtersState),
  });
  const locations = [...new Set(data?.campers.map(camper => camper.location))];
  console.log(locations);

  return (
    <section>
      <SidebarFilter filters={filters} setFiltersState={setFiltersState} />
      {data && (
        <CamperList campers={data.campers} totalPages={data.totalPages} />
      )}
    </section>
  );
}

export default Catalog;
