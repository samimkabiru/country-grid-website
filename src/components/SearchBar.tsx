import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import getTrimmedSearchInput from '../services/trimmedSearchInput';

interface Props {
  onSearchCountry: (countryName: string) => void;
}

const SearchBar = ({ onSearchCountry }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current)
          onSearchCountry(getTrimmedSearchInput(ref.current.value));
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search for a country..."
          autoComplete="off"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
