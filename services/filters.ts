import { Filters } from '@/types/filters';

export async function fetchFilters(): Promise<Filters> {
  const response = await fetch(
    'https://campers-api.goit.study/campers/filters',
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch filters');
  }

  const data: Filters = await response.json();

  return data;
}
