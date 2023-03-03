import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { yupRegisterValidation } from 'components/helpers/yupValidation';
import { useDispatch } from 'react-redux';
import { userSignup } from 'redux/auth/authService';

export const RegForm = () => {
  const initialValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, props) => {
    dispatch(
      userSignup({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    props.resetForm();
  };

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Paper>
        <Box p={5}>
          <Typography variant="h5">Registration</Typography>
          <Formik
            initialValues={initialValue}
            validationSchema={yupRegisterValidation}
            onSubmit={handleSubmit}
          >
            {props => {
              const { name } = props.values;
              return (
                <Form>
                  {/* Name */}
                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    value={name}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={<ErrorMessage name="name" />}
                    error={props.errors.name && props.touched.name}
                    required
                  />
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
                  {/* Password */}
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
                  {/* Confirm Password */}
                  <Field
                    as={TextField}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="confirmPassword" />}
                    error={
                      props.errors.confirmPassword &&
                      props.touched.confirmPassword
                    }
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
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
