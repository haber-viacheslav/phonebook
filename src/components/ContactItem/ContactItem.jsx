import PropTypes from 'prop-types';
import {
  ContactItemButton,
  ContactItemWrp,
  ContactName,
  ContactPhone,
} from './ContactItem.styled';
import { changeContact, deleteContact } from 'redux/contacts/contactService';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Modal } from '@mui/material';

const ContactItem = ({ contact: { name, number, id } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleIsOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));
  const handleChangeContact = () => dispatch(changeContact(id));
  return (
    <>
      <ContactItemWrp>
        <ContactName>
          {name}: <ContactPhone>{number}</ContactPhone>
        </ContactName>
        <ContactItemButton type="button" onClick={handleDeleteContact}>
          delete
        </ContactItemButton>
        <button type="button" onClick={handleToggleIsOpen}>
          edit
        </button>
      </ContactItemWrp>
      <Modal
        onClose={handleToggleIsOpen}
        handleChange={handleChangeContact}
        open={isOpen}
      />
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
