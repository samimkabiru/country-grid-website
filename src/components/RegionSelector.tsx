import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const RegionSelector = () => {
  return (
    <Menu>
      <MenuButton
        variant="ghost"
        boxShadow="md"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Filter By Region
      </MenuButton>
      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
