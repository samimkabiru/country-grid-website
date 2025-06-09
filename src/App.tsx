import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav" bg="blue">
        Nav
      </GridItem>
      <GridItem area="main" bg="coral">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
