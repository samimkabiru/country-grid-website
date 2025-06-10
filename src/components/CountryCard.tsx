import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { Country } from './CountriesGrid';

interface Props {
  country: Country;
}

const CountryCard = ({
  country: { flags, name, population, region, capital },
}: Props) => {
  const countryDetails = [
    { detailName: 'Population', detailValue: population },
    { detailName: 'Region', detailValue: region },
    { detailName: 'Capital', detailValue: capital },
  ];

  return (
    <Card borderRadius={10} overflow="hidden">
      <Box height="250px" overflow="hidden">
        <Image
          width="full"
          height="full"
          objectFit="cover"
          src={flags.svg}
          alt={`${name.official}'s flag`}
        />
      </Box>
      <CardBody>
        <Heading as="h2" fontSize="2xl">
          {name.official}
        </Heading>

        <List>
          {countryDetails.map((countryDetail) => (
            <ListItem>
              <HStack>
                <Heading as="h3" fontSize="21px" fontWeight={400}>
                  {countryDetail.detailName}:
                </Heading>
                <Text>{countryDetail.detailValue}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  );
};

export default CountryCard;
