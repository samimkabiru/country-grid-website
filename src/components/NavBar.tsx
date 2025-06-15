import { Heading, HStack } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack
      paddingX={3}
      paddingY={5}
      justifyContent="space-between"
      boxShadow="md"
    >
      <Heading fontSize="2xl">Where in the world?</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
