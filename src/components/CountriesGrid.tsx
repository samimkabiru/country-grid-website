import { SimpleGrid, Text } from '@chakra-ui/react';
import CountryCard from './CountryCard';
import useCountries from '../hooks/useCountries';

interface Props {
  searchedCountry: string;
  selectedRegion: string;
  onSelectCountry: (countryName: string) => void;
}

const CountriesGrid = ({
  selectedRegion,
  searchedCountry,
  onSelectCountry,
}: Props) => {
  const { error, countries } = useCountries(searchedCountry, [searchedCountry]);

  const displayedCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        marginY={12}
        spacing={8}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {displayedCountries.slice(0, 24).map((country) => (
          <CountryCard
            key={country.name.official}
            country={country}
            onClick={() => onSelectCountry(country.name.official)}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CountriesGrid;
