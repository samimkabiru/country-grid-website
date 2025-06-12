import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Name {
  official: string;
}

interface Flags {
  svg: string;
}

export interface Country {
  name: Name;
  flags: Flags;
  population: number;
  region: string;
  capital: string[];
}

const useCountries = (
  searchedCountry: string,
  selectedRegion: string,
  deps: any[]
) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState('');

  const endpoint1 = selectedRegion && `/region/${selectedRegion}`;
  const endpoint2 = searchedCountry && `/name/${searchedCountry}`;
  const endpoint3 =
    searchedCountry &&
    selectedRegion &&
    `/region/${selectedRegion}/name/${searchedCountry}`;

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Country[]>(endpoint3 || endpoint2 || endpoint1 || '/all', {
        signal: controller.signal,
      })
      .then((res) => setCountries(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, deps);

  return { countries, error };
};

export default useCountries;
