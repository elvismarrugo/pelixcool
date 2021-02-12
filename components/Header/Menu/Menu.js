import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react';


export default function MenuWeb() {
  return (
    <div className='menu'>
      <Container>
        <Grid>
          <Grid.Column width={10} className='menu-left'></Grid.Column>
          <Menu.Item>Inicio </Menu.Item>
          <Menu.Item>MiLista </Menu.Item>
          <Menu.Item>Nuevas </Menu.Item>
          <Menu.Item>Tendencias </Menu.Item>
        </Grid>
        <Grid>
          <Grid.Column width={2} className='menu-right'></Grid.Column>
          <Menu.Item>Buscador </Menu.Item>
          <Menu.Item>Usuario </Menu.Item>
        </Grid>
      </Container>
    </div>
  );
}
