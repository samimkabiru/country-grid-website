import { SimpleGrid, Text } from '@chakra-ui/react';
import CountryCard from './CountryCard';
import useCountries from '../hooks/useCountries';

interface Props {
  searchedCountry: string;
  selectedRegion: string;
}

const CountriesGrid = ({ selectedRegion, searchedCountry }: Props) => {
  const { error, countries } = useCountries(searchedCountry, selectedRegion, [
    searchedCountry,
    selectedRegion,
  ]);

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
