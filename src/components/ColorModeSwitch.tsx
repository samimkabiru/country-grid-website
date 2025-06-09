import { Button, Text, useColorMode } from '@chakra-ui/react';
import { IoMoonOutline } from 'react-icons/io5';

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Button variant="ghost" onClick={() => toggleColorMode()}>
      <IoMoonOutline />
      <Text marginX="8px">Dark Mode</Text>
    </Button>
  );
};

export default ColorModeSwitch;
