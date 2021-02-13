import { Container, Menu, Grid, Image, Input, Icon } from 'semantic-ui-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className='top-bar'>
      <Container>
        <Grid className='top-bar'>
          <Grid.Column width={6} className='top-bar__left'>
            <Logo />
            <NavLinks />
          </Grid.Column>
          <Grid.Column width={10} className='top-bar__right'>
            <Search />
            <Login />            
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function Logo() {
  return (
    <Link href='/'>
      <a>
        <Image src='/PelixCool.svg' alt='PelixCool' />
      </a>
    </Link>
  );
}

function NavLinks() {
  return (
    <Menu>
      <Link href='/'>
        <Menu.Item as='a'>Inicio</Menu.Item>
      </Link>
      <Link href='/milista'>
        <Menu.Item as='a'>Mi Lista</Menu.Item>
      </Link>

      <Link href='/nuevas'>
        <Menu.Item as='a'>Nuevas</Menu.Item>
      </Link>
      <Link href='/tendencias'>
        <Menu.Item as='a'>Tendencias</Menu.Item>
      </Link>
    </Menu>
  );
}

function Search() {
  return (
    <Input
      id='search-movie'
      icon={{ name: 'search' }}
      placeholder='Busqueda peliculas'
    />
  );
}

function Login() {  
  return (
    <Menu>
      <Menu.Item>
        <Icon name='user outline'/>
        Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
