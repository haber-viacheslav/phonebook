import { AuthNav } from 'components/AuthNav/AuthNav';
import { MainNav } from 'components/MainNav/MainNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Container, Box } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
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
    </header>
  );
};
