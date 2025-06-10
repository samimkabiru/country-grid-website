import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CountriesGrid from './components/CountriesGrid';

// TODO: wrap countries grid with a container and apply padding as well as
// constraint.

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <CountriesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
