import { useState } from 'react';
import { Container, Menu, Grid, Image, Input, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import BasicModal from '../../Modal/BasicModal';

export default function TopBar() {

  const [showModal, setShowModal] = useState(false);
  const onShowModal = () => setShowModal(true);

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
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title='Inicia sesión'
        // size='small'
      >
        <h2>Contenido del modal</h2>
      </BasicModal>
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

function Login(props) {
  const { onShowModal } = props;

  return (
    <Menu>
      <Menu.Item onClick={onShowModal}>
        <Icon name='user outline' />
        Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
