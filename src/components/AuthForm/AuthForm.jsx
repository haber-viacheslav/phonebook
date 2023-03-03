import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { yupLoginValidation } from 'components/helpers/yupValidation';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/authService';

export const AuthForm = () => {
  const initialValue = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, props) => {
    dispatch(userLogin(values));
    props.resetForm();
  };

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Paper>
        <Box p={5}>
          <Typography variant="h5">Login</Typography>
          <Formik
            initialValues={initialValue}
            validationSchema={yupLoginValidation}
            onSubmit={handleSubmit}
          >
            {props => {
              return (
                <Form>
                  {/* Email */}
                  <Field
                    as={TextField}
                    label="Email"
                    type="Email"
                    name="email"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="email" />}
                    error={props.errors.email && props.touched.email}
                  />

                  <Field
                    as={TextField}
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="password" />}
                    error={props.errors.password && props.touched.password}
                  />

                  <Button
                    sx={{ textAlign: 'center' }}
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Paper>
    </Grid>
  );
};
