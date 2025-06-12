import { Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CountriesGrid from './components/CountriesGrid';
import CountriesGridContainer from './components/CountriesGridContainer';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import RegionSelector from './components/RegionSelector';

function App() {
  const [searchedCountry, setSearchedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <HStack
          paddingX={{ sm: '15px', lg: '60px' }}
          justifyContent="space-between"
          marginTop="35px"
          flexWrap="wrap"
        >
          <SearchBar
            onSearchCountry={(countryName) => setSearchedCountry(countryName)}
          />
          <RegionSelector
            onSelectRegion={(region) => setSelectedRegion(region)}
          />
        </HStack>
        <CountriesGridContainer>
          <CountriesGrid
            selectedRegion={selectedRegion}
            searchedCountry={searchedCountry}
          />
        </CountriesGridContainer>
      </GridItem>
    </Grid>
  );
}

export default App;
