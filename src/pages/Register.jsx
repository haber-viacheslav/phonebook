import { RegForm } from 'components/RegForm/RegForm';
import { Container, Paper } from '@mui/material';
const Register = () => {
  return (
    <Paper sx={{ height: { xs: '76vh', sm: '80vh', lg: '84vh', xl: '87vh' } }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <RegForm />
      </Container>
    </Paper>
  );
};
export default Register;
