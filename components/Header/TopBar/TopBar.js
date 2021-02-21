import { useState, useEffect } from 'react';
import { Container, Menu, Grid, Image, Input, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import BasicModal from '../../Modal/BasicModal';
import Auth from '../../Auth';
import { useRouter } from 'next/router';

export default function TopBar() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('Iniciar Sesión');

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

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
            <Login onShowModal={onShowModal} />
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
        size='small'
      >
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
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
  const [searchStr, setSearchStr] = useState('')
  const [load, setLoad] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (load) {
      router.push(`/search?query=${searchStr}`);
    }
    setLoad(true);
  }, [searchStr])

  return (
    <Input
      id='search-movie'
      icon={{ name: 'search' }}
      value={router.query.query}
      placeholder='Busqueda peliculas'
      onChange={(_,data)=> setSearchStr(data.value)}
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
