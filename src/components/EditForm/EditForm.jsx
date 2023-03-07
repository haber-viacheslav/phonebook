import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { contactYupSchema } from 'components/helpers/yupValidation';
import { useDispatch } from 'react-redux';
import { changeContact, fetchContacts } from 'redux/contacts/contactService';
import { PropTypes } from 'prop-types';
import { checkContact, checkPhone } from 'components/helpers/formCheckers';
import { selectContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

export const EditForm = ({ data, onClose }) => {
  const { name, number, id } = data;
  const initialValue = {
    name: name,
    number: number,
  };
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleChangeContact = (data, props) => {
    if (checkContact(contacts, data) || checkPhone(contacts, data)) {
      toast.error(
        `Error! 😲 ${data.name}  ${data.number} is already in contacts`,
        {
          duration: 2000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      return;
    }

    dispatch(changeContact({ id, data }));
    onClose();
    props.resetForm();
    dispatch(fetchContacts());
  };

  return (
    <Container>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Paper>
          <Box p={5}>
            <Typography variant="h5">Edit contact</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={contactYupSchema}
              onSubmit={handleChangeContact}
            >
              {props => {
                return (
                  <Form>
                    {/* Name */}
                    <Field
                      as={TextField}
                      label="name"
                      type="text"
                      name="name"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="name" />}
                      error={props.errors.email && props.touched.email}
                      size="small"
                    />
                    {/* Phone Number */}
                    <Field
                      as={TextField}
                      label="number"
                      name="number"
                      type="tel"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="number" />}
                      error={props.errors.password && props.touched.password}
                      size="small"
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
    </Container>
  );
};

EditForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
