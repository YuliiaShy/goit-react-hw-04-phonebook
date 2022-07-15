import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from 'components/Container';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import contacts from 'components/contacts.json';

class App extends Component {
  state = {
    contacts,
    filter: ''
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number
    }

    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase())
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };
 
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getFindContact = () => {
    const { contacts, filter} = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contact", JSON.stringify(this.state.contacts) )
    }
  };

  componentDidMount() {
    const contact = localStorage.getItem("contact");
    const parsedContacts = JSON.parse(contact);
    if (parsedContacts) {
    this.setState({ contacts: parsedContacts})  
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={this.handleFilterChange} />
        <ContactList list={this.getFindContact(filter)} onDelete={this.deleteContact} />
  </Container>
  );  
  }
};

export default App;