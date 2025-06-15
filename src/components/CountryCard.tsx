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
import { Country } from './../hooks/useCountries';

interface Props {
  country: Country;
  onClick: () => void;
}

const CountryCard = ({
  country: { flags, name, population, region, capital },
  onClick,
}: Props) => {
  const countryDetails = [
    { detailName: 'Population', detailValue: population },
    { detailName: 'Region', detailValue: region },
    { detailName: 'Capital', detailValue: capital },
  ];

  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      onClick={onClick}
      _hover={{
        boxShadow: 'lg',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
      }}
    >
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
        <Heading as="h2" fontSize="2xl" marginBottom={3}>
          {name.official}
        </Heading>

        <List>
          {countryDetails.map((countryDetail) => (
            <ListItem marginY="3px" key={countryDetail.detailName}>
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
