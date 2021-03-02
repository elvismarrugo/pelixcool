import { useState, useEffect } from 'react';
import { Container, Menu, Grid, Image, Input, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import BasicModal from '../../Modal/BasicModal';
import Auth from '../../Auth';
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";

export default function TopBar() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('Iniciar Sesión');
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

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
            <Search/>
            {user !== undefined && (
              <Login
                onShowModal={onShowModal}
                user={user}
                logout={logout}/>
            )}
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
      <Link href='/nuevas'>
        <Menu.Item as='a'>Nuevas</Menu.Item>
      </Link>
      <Link href='/tendencias'>
        <Menu.Item as='a'>Tendencias</Menu.Item>
      </Link>
    </Menu>
  );
}

function Login(props) {
  const { onShowModal, user, logout } = props;

  return (
    <Menu>
      {user ? (
        <>
        <Link href="/wishlist">
            <Menu.Item as="a">
              <Icon name="heart outline" />
              Wishlist
            </Menu.Item>
          </Link>
          <Link href="/account">
            <Menu.Item as="a" className="m-0">
              <Icon name="user outline" />
              {user.name} {user.lastname}
            </Menu.Item>
          </Link>
          <Menu.Item className="m-0" onClick={logout}>
            <Icon name='power off' />
            Cerrar Sesión
          </Menu.Item>
        </>
      ) : (
        <Menu.Item className="m-0" onClick={onShowModal}>
          <Icon name='user outline' />
          Mi cuenta
        </Menu.Item>
      )}
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
  }, [searchStr]);

  return (
    <Input
      id='search-movie'
      icon={{ name: "search" }}
      // value={searchStr}
      value={router.query.query}
      onChange={(_, data) => setSearchStr(data.value)}
    />
  );
}
