'use client';

import { Filters } from '@/types/filters';
import css from './Catalog.modulle.css';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { useQuery } from '@tanstack/react-query';
import { fetchCampers } from '@/services/campers';
import CamperList from './CamperList/CamperList';

interface CatalogProps {
  filters: Filters;
}

function Catalog({ filters }: CatalogProps) {
  const { data } = useQuery({ queryKey: ['campers'], queryFn: fetchCampers });
  console.log(data);

  return (
    <section>
      <SidebarFilter filters={filters} />
      <CamperList />
    </section>
  );
}

export default Catalog;
