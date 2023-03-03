import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading....</p>}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Toaster />
    </>
  );
};
