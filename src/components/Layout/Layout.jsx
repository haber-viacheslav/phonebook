import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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
          <Paper sx={{ height: { xs: '76vh', sm: '80vh', lg: '88vh' } }}>
            <section>
              <Outlet />
            </section>
          </Paper>
        </main>
      </Suspense>
      <Toaster />
      <AppFooter />
    </Paper>
  );
};
