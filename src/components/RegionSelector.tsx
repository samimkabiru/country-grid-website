import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectRegion: (region: string) => void;
}

const RegionSelector = ({ onSelectRegion }: Props) => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

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
        {regions.map((region) => (
          <MenuItem
            key={region}
            value={region}
            onClick={() => onSelectRegion(region)}
          >
            {region}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
