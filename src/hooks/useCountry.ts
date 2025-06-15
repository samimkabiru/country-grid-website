import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Name {
  official: string;
  nativeName: NativeName;
}

interface Flags {
  svg: string;
}

interface Languages {
  [key: string]: string;
}

interface Currencies {
  [currencyName: string]: { name: string };
}

interface NativeName {
  [nativeNameKey: string]: { common: string };
}

export interface Country {
  name: Name;
  flags: Flags;
  population: number;
  region: string;
  capital: string[];
  tld: string[];
  currencies: Currencies;
  languages: Languages;
  borders: string[];
}

const useCountry = (selectedCountry: string, deps: any[]) => {
  const [country, setCountry] = useState<Country>({} as Country);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Country[]>(`/name/${selectedCountry}?fullText=true`, {
        signal: controller.signal,
      })
      .then((res) => setCountry(res.data[0]))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [...deps]);

  return { country, error };
};

export default useCountry;
