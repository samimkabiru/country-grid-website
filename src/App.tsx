import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CountriesGrid from './components/CountriesGrid';
import CountriesGridContainer from './components/CountriesGridContainer';

// TODO: wrap countries grid with a container and apply padding as well as
// constraint.

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <CountriesGridContainer>
          <CountriesGrid />
        </CountriesGridContainer>
      </GridItem>
    </Grid>
  );
}

export default App;
