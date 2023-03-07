import { AuthForm } from 'components/AuthForm/AuthForm';
import { Container } from '@mui/material';
const Login = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AuthForm />
    </Container>
  );
};

export default Login;
