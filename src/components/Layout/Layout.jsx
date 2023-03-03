import { AuthNav } from 'components/AuthNav/AuthNav';
import { MainNav } from 'components/MainNav/MainNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';
import { Container, Box } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Container maxWidth="lx">
          <Box
            sx={{
              py: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <MainNav />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Container>
      </Header>
      <Suspense fallback={<p>Loading....</p>}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
    </>
  );
};
