import PropTypes from 'prop-types';
import {
  ContactItemButton,
  ContactItemWrp,
  ContactName,
  ContactPhone,
} from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactService';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));
  return (
    <ContactItemWrp>
      <ContactName>
        {name}: <ContactPhone>{number}</ContactPhone>
      </ContactName>
      <ContactItemButton onClick={handleDeleteContact}>
        delete
      </ContactItemButton>
    </ContactItemWrp>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
