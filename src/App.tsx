import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CountriesGrid from './components/CountriesGrid';
import CountriesGridContainer from './components/CountriesGridContainer';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import RegionSelector from './components/RegionSelector';
import CountryDetails from './components/CountryDetails';

function App() {
  const [searchedCountry, setSearchedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" paddingX={{ sm: '20px', lg: '45px' }}>
        {selectedCountry && (
          <CountryDetails
            onClose={() => setSelectedCountry('')}
            selectedCountry={selectedCountry}
          />
        )}
        {!selectedCountry && (
          <Box>
            <HStack
              justifyContent="space-between"
              marginTop="35px"
              flexWrap="wrap"
            >
              <SearchBar
                onSearchCountry={(countryName) =>
                  setSearchedCountry(countryName)
                }
              />
              <RegionSelector
                selectedRegion={selectedRegion}
                onSelectRegion={(region) => setSelectedRegion(region)}
              />
            </HStack>
            <CountriesGridContainer>
              <CountriesGrid
                onSelectCountry={(countryName) =>
                  setSelectedCountry(countryName)
                }
                selectedRegion={selectedRegion}
                searchedCountry={searchedCountry}
              />
            </CountriesGridContainer>
          </Box>
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
