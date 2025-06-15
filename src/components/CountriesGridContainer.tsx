import { ReactNode } from 'react';
import { Container } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const CountriesGridContainer = ({ children }: Props) => {
  return (
    <Container p={0} maxWidth={'max-content'}>
      {children}
    </Container>
  );
};

export default CountriesGridContainer;
