import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import axios, { CanceledError } from 'axios';

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

interface BorderCountry {
  name: { common: string };
}

const useCountry = (selectedCountry: string, deps: any[]) => {
  const [country, setCountry] = useState<Country>({} as Country);
  const [error, setError] = useState('');
  const [borderCountries, setBorderCountries] = useState<BorderCountry[]>([]);

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

  useEffect(() => {
    const controller = new AbortController();

    if (country.borders && Array.isArray(country.borders))
      axios
        .get<BorderCountry[]>(
          `https://restcountries.com/v3.1/alpha?codes=${country.borders?.join(
            ','
          )}`,
          { signal: controller.signal }
        )
        .then((res) => setBorderCountries(res.data))
        .catch((err) => {
          if (err) return;
        });

    return () => controller.abort();
  }, [country.borders]);

  return { country, error, borderCountries };
};

export default useCountry;
