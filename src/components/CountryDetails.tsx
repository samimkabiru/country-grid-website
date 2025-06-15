import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import useCountry from '../hooks/useCountry';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';

interface Props {
  selectedCountry: string;
  onClose: () => void;
}

interface BorderCountry {
  name: { common: string };
}

const CountryDetails = ({ selectedCountry, onClose }: Props) => {
  const { colorMode } = useColorMode();
  const [borderCountries, setBorderCountries] = useState<BorderCountry[]>([]);
  const {
    country: {
      flags,
      name,
      population,
      region,
      capital,
      tld,
      currencies,
      languages,
      borders,
    },
    error,
  } = useCountry(selectedCountry, [selectedCountry]);

  const nativeNameCommon =
    name?.nativeName && Object.values(name.nativeName)[0]?.common;

  const countryCurrencies = currencies && Object.values(currencies)[0].name;

  const countryLanguages = languages && Object.values(languages).join(', ');

  useEffect(() => {
    const controller = new AbortController();

    if (borders && Array.isArray(borders))
      axios
        .get<BorderCountry[]>(
          `https://restcountries.com/v3.1/alpha?codes=${borders?.join(',')}`,
          { signal: controller.signal }
        )
        .then((res) => setBorderCountries(res.data))
        .catch((err) => {
          if (err) return;
        });

    return () => controller.abort();
  }, [borders]);

  const countryDetailsMap = [
    {
      detailName: 'Native Name',
      detailValue: nativeNameCommon,
    },
    { detailName: 'Population', detailValue: population?.toString() },
    { detailName: 'Region', detailValue: region },
    { detailName: 'Capital', detailValue: capital?.join('') },
    { detailName: 'Top Level Domain', detailValue: tld?.join('') },
    {
      detailName: 'Currencies',
      detailValue: countryCurrencies,
    },
    { detailName: 'Languages', detailValue: countryLanguages },
  ];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Button
        leftIcon={<BsArrowLeft />}
        background="none"
        boxShadow="md"
        marginTop={10}
        onClick={onClose}
      >
        Back
      </Button>
      <SimpleGrid
        columns={{ sm: 1, lg: 2 }}
        columnGap="50px"
        alignItems="center"
        paddingBottom={10}
      >
        <Image
          src={flags?.svg}
          marginBottom={17}
          width="full"
          height="80%"
          objectFit="cover"
        />
        <Box>
          <Heading as="h2" marginBottom={5} fontWeight="500" fontSize="3xl">
            {name?.official}
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2 }}>
            <List marginBottom="30px">
              {countryDetailsMap.slice(0, 4).map((countryDetail) => (
                <ListItem key={countryDetail.detailName} marginY={3}>
                  <HStack>
                    <Heading as="h3" fontWeight="500" fontSize="md">
                      {countryDetail.detailName}:
                    </Heading>
                    <Text fontSize="sm">{countryDetail.detailValue}</Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
            <List marginBottom="6px">
              {countryDetailsMap.slice(4).map((countryDetail) => (
                <ListItem key={countryDetail.detailName} marginY={3}>
                  <HStack>
                    <Heading as="h3" fontWeight="500" fontSize="md">
                      {countryDetail.detailName}:
                    </Heading>
                    <Text fontSize="sm">{countryDetail.detailValue}</Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </SimpleGrid>
          <HStack flexWrap="wrap">
            <Heading
              as="h3"
              fontWeight="500"
              fontSize="md"
              width="full"
              marginBottom="3px"
            >
              Border Countries:
            </Heading>
            {borderCountries.map((borderCountry) => (
              <Box
                key={borderCountry.name.common}
                boxShadow={colorMode === 'dark' ? 'dark-lg' : 'md'}
                borderRadius="2px"
                paddingX="20px"
                paddingY="5px"
              >
                {borderCountry.name.common}
              </Box>
            ))}
          </HStack>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default CountryDetails;
