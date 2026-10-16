export interface Filters {
  forms: string[];
  engines: string[];
  transmissions: string[];
}

export interface FiltersState {
  location: string;
  form: null | string;
  engine: null | string;
  transmission: null | string;
}

export const initialFiltersState: FiltersState = {
  location: '',
  form: null,
  transmission: null,
  engine: null,
};
