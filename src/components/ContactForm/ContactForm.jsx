import { Formik } from 'formik';
import { addContact } from 'redux/contacts/contactService';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  FormWrap,
  FormErrorMessage,
  FormInput,
  FormLabel,
  FormInputWrp,
  FormButton,
} from './ContactForm.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { checkContact, checkPhone } from 'components/helpers/formCheckers';
import { contactYupSchema } from 'components/helpers/yupValidation';

// Initial values for formik
const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, { resetForm }) => {
    if (checkContact(contacts, values)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    if (checkPhone(contacts, values)) {
      alert(`${values.number} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactYupSchema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <FormInputWrp htmlFor="name">
          <FormLabel>Name</FormLabel>
          <FormInput type="text" name="name" />
          <FormErrorMessage name="name" component="div" />
        </FormInputWrp>

        <FormInputWrp htmlFor="number">
          <FormLabel>Phone</FormLabel>
          <FormInput type="tel" name="number" />
          <FormErrorMessage name="number" component="div" />
        </FormInputWrp>

        <FormButton type="submit">Add contact</FormButton>
      </FormWrap>
    </Formik>
  );
};

export default ContactForm;
