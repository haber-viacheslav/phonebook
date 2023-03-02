import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { yupValidation } from 'components/helpers/yupValidation';

export const AuthForm = () => {
  const initialValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, props) => {
    console.log(values);
    console.log(JSON.stringify(values));

    props.resetForm();
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Login</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={yupValidation}
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
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
};
