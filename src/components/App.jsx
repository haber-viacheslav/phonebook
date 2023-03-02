// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contactService';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { useState } from 'react';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { Toaster } from 'react-hot-toast';
// import Button from '@mui/material/Button';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // console.log('error', error);
  // console.log('isloading', isLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  return (
    <Routes>
      <Route path="/" element={<Layout />} end>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

// <div>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   <h2>Contacts</h2>
//   <Filter />
//   <ContactList />
//   {isLoading && !error && <p>Loading ...</p>}
//   <Toaster position="top-center" reverseOrder={false} />
//   <Button onClick={handleToggle}>Show backdrop</Button>
//   <Backdrop
//     sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
//     open={open}
//     onClick={handleClose}
//   >
//     <CircularProgress color="inherit" />
//   </Backdrop>
// </div>
