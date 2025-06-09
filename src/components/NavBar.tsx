import { Heading, HStack } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <HStack>
      <Heading paddingX={3} paddingY={5} fontSize="2xl">
        Where in the world?
      </Heading>
    </HStack>
  );
};

export default NavBar;
