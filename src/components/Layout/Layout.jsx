import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import { Paper } from '@mui/material';
import { AppFooter } from 'components/AppFooter/AppFooter';
export const Layout = () => {
  return (
    <Paper square>
      <AppBar />
      <Suspense fallback={null}>
        <main>
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
        </main>
      </Suspense>
      <Toaster />
      <AppFooter />
    </Paper>
  );
};
