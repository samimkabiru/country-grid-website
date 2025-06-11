import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CountriesGrid from './components/CountriesGrid';
import CountriesGridContainer from './components/CountriesGridContainer';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [searchedCountry, setSearchedCountry] = useState('');

  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <CountriesGridContainer>
          <SearchBar
            onSearchCountry={(countryName) => setSearchedCountry(countryName)}
          />
          <CountriesGrid searchedCountry={searchedCountry} />
        </CountriesGridContainer>
      </GridItem>
    </Grid>
  );
}

export default App;
