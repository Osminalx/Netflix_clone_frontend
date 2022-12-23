import {MantineProvider,AppShell,Navbar,Header,Text,MediaQuery,Burger,useMantineTheme,NavLink} from '@mantine/core';
import { useState } from 'react';
import {Routes, Route,useNavigate,Link} from 'react-router-dom'
import Inicio from './pages/Inicio';
import Admin from './pages/Admin';


export default function App() {
  const theme = useMantineTheme();
  const[opened,setOpened]=useState(false);
  const[allMovies,setAllMovies]=useState([]);
  const[favorites,setFavorites]=useState([]);
  const navigate = useNavigate();

  return (
    <MantineProvider  theme={{ colorScheme:'dark' }} withGlobalStyles withNormalizeCSS>
   <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Link to ='/' style={{textDecoration: 'none'}}>
          <NavLink label="Inicio" variant='subtle' onClick={()=> navigate('/')} />
          </Link>
          <Link to ='/admin' style={{textDecoration: 'none'}} >
          <NavLink label="Admin" variant='subtle' onClick={()=> navigate('/admin')} />
          </Link>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={(opened) => setOpened((opened) => !opened)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>Icono</Text>
          </div>
        </Header>
      }
    >
    <Routes>
      <Route
      path='/'
      element={
        <Inicio/>
      }
      />
      <Route
      path='/admin'
      element={
        <Admin
          allMovies={allMovies}
          setAllMovies={setAllMovies}
        />
      }
      />
    </Routes>
    </AppShell>
    </MantineProvider>
  );
}