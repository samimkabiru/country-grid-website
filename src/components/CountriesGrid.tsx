import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import CountryCard from './CountryCard';

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

const CountriesGrid = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<Country[]>('/all')
      .then((res) => {
        setCountries(res.data);
        console.log(res.data[0]);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        marginY={12}
        spacing={8}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {countries.slice(0, 24).map((country) => (
          <CountryCard key={country.name.official} country={country} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CountriesGrid;
