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

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Country[]>('/all', { signal: controller.signal })
      .then((res) => setCountries(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { countries, error };
};

export default useCountries;
