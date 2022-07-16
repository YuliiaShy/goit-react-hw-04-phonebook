import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import {Title} from 'App.styled';
import contactsList from 'components/contacts.json';

 function App () {
 const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contact')) ?? contactsList
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
   
    const newContact = {
      id: nanoid(),
      name,
      number
    }

    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase())
      ? toast.error(`${newContact.name} is already in contacts`)
      : setContacts( contacts  => {
          return [...contacts, newContact]
        });
  };
 
  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id),
    )
  };

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value) ;
  };

  const getFindContact = (value) => {
    const normalizeFilter = value.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter))
      .sort((a, b) => a.name.localeCompare(b.name))
  };

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={addContact}/>
        <Title>Contacts</Title>
        <Filter value={filter} onFilterChange={handleFilterChange} />
        <ContactList list={getFindContact(filter)} onDelete={deleteContact} />
        <ToastContainer autoClose={2000} />
      </Container>
  );  
};

export default App;