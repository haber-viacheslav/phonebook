import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import { Paper } from '@mui/material';
import { AppFooter } from 'components/AppFooter/AppFooter';
// import { Backdrop } from '@mui/material';
import { Main } from './Layout.styled';
// import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Paper square>
      <AppBar />
      <Suspense fallback={null}>
        <Main>
          <section>
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Outlet />
            </Container>
          </section>
        </Main>
      </Suspense>
      <Toaster />
      <AppFooter />
    </Paper>
  );
};
