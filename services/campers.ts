import { Camper } from '@/types/camper';
import { api } from './api';
import { FiltersState } from '@/types/filters';

interface CampersApiResponse {
  campers: Camper[];
  totalPages: number;
}

export async function fetchCampers({
  location,
  form,
  transmission,
  engine,
}: FiltersState): Promise<CampersApiResponse> {
  const { data } = await api.get<CampersApiResponse>('/', {
    params: {
      location,
      form,
      transmission,
      engine,
    },
  });

  return data;
}
