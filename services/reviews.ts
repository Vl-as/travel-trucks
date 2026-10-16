import { Review } from '@/types/review';
import { api } from './api';

export async function getCamperReviews(id: string): Promise<Review[]> {
  const { data } = await api.get<Review[]>(`/${id}/reviews`);

  return data;
}
