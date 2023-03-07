import { AuthForm } from 'components/AuthForm/AuthForm';
import { Container, Paper } from '@mui/material';
const Login = () => {
  return (
    <Paper sx={{ height: { xs: '76vh', sm: '80vh', lg: '84vh', xl: '87vh' } }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AuthForm />
      </Container>
    </Paper>
  );
};

export default Login;
