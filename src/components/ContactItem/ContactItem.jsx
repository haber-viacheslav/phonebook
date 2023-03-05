import PropTypes from 'prop-types';
import {
  ContactItemWrp,
  ContactName,
  ContactPhone,
} from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactService';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Modal } from '../MainModal/Modal';
import { EditForm } from 'components/EditForm/EditForm';
import { IconButton, Tooltip, Box } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ContactItem = ({ contact: { name, number, id } }) => {
  const actualFields = { name, number, id };
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleIsOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactItemWrp>
        <ContactName>
          {name}: <ContactPhone>{number}</ContactPhone>
        </ContactName>
        <Box>
          <Tooltip title="Edit">
            <IconButton onClick={handleToggleIsOpen}>
              <ModeEditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={handleDeleteContact}>
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </ContactItemWrp>
      {isOpen && (
        <Modal onClick={handleToggleIsOpen}>
          <EditForm onClose={handleToggleIsOpen} data={actualFields} />
        </Modal>
      )}
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
