import { RegForm } from 'components/RegForm/RegForm';
import { Container } from '@mui/material';
const Register = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <RegForm />
    </Container>
  );
};
export default Register;
