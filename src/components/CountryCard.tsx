import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Country } from './CountriesGrid';

interface Props {
  country: Country;
}

const CountryCard = ({ country: { flags, name, population } }: Props) => {
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
        <Heading as="h3" fontSize="2xl" fontWeight={400}>
          Population: {population}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CountryCard;
