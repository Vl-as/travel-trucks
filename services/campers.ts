import { Camper } from '@/types/camper';
import { api } from './api';
import { FiltersState } from '@/types/filters';
import { cache } from 'react';

interface CampersApiResponse {
  campers: Camper[];
  totalPages: number;
  page: number;
}

export async function fetchCampers(
  { location, form, transmission, engine }: FiltersState,
  page: number
): Promise<CampersApiResponse> {
  const { data } = await api.get<CampersApiResponse>('/', {
    params: {
      location,
      form,
      transmission,
      engine,
      perPage: 4,
      page,
    },
  });

  return data;
}

export const getSingleCamper = cache(
  async (id: string): Promise<Camper | null> => {
    try {
      const { data } = await api.get<Camper>(`/${id}`);

      return data;
    } catch {
      return null;
    }
  }
);
