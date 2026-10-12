export interface Filters {
  forms: string[];
  engines: string[];
  transmissions: string[];
}

export interface FiltersState {
  location: null | string;
  form: null | string;
  engine: null | string;
  transmission: null | string;
}
