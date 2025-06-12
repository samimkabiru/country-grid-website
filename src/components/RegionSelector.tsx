import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectRegion: (region: string) => void;
  selectedRegion: string;
}

const RegionSelector = ({ onSelectRegion, selectedRegion }: Props) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <Menu>
      <MenuButton
        variant="ghost"
        boxShadow="md"
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedRegion || 'Filter By Region'}
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
