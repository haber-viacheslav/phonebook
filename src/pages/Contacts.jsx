import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Tooltip, Container } from '@mui/material';
import { useState } from 'react';
import { Modal } from 'components/MainModal/Modal';
import { Box } from '@mui/material';
const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', gap: '2rem', alignItems: 'center', p: 3 }}>
        <Tooltip title="Add your contact">
          <IconButton onClick={handleToggleIsOpen}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Filter />
      </Box>
      {isOpen && (
        <Modal onClick={handleToggleIsOpen}>
          <ContactForm onClose={handleToggleIsOpen} />
        </Modal>
      )}
      <ContactList />
    </Container>
  );
};

export default Contacts;
