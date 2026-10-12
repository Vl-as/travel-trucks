import { api } from './api';

export async function fetchCampers() {
  const { data } = await api.get('/');

  return data;
}
