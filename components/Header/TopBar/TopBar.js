import { Container, Grid, Image, Input } from 'semantic-ui-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className='top-bar'>
      <Container>
        <Grid className='top-bar'>
          <Grid.Column width={8} className='top-bar__left'>
            <Logo />
            <h2>Inicio</h2>
            <h2>Inicio</h2>
            <h2>Inicio</h2>
            <h2>Inicio</h2>            
          </Grid.Column>
          <Grid.Column width={8} className='top-bar__right'>
            <Search />            
            <h2>Inicio</h2>    
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

function Search() {
  return (
    <Input
      id='search-movie'
      icon={{ name: 'search' }}
      placeholder='Busqueda peliculas'
    />
  );
}
