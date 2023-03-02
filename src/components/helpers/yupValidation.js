import { string, object, ref } from 'yup';
import 'yup-phone';

export const contactYupSchema = object().shape({
  name: string().trim().strict().required(),
  phone: string().phone('UA').required(),
});

const PasswordRegEx =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const yupValidation = object().shape({
  name: string().trim().strict().required('Required !'),

  email: string().email('Enter a Vaid Email').required('Email is Required'),

  password: string()
    .required('Enter Your Password')
    .matches(PasswordRegEx, 'Uppercase Lowercase Special char Required')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),

  confirmPassword: string()
    .oneOf([ref('password')], 'Password does not matched')
    .required('Confirm Password is Required'),

  // select:string().required("Select a Option"),
});
