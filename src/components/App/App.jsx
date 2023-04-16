import React, { Component } from "react";
import { IconContext } from "react-icons";
import { ContactForm } from '../ContactForm/ContactForm';
import Contacts from '../Contacts';
import Filter from '../Filter/Filter'
import initialContacts from '../../initialContacts.json';
import { nanoid } from 'nanoid';
import { Container, Section, Title } from './App.styled';
import { theme } from '../../constants';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  }

  formatPhoneNumber = str => {
    return str.slice(0, 3) + "-" + str.slice(-4, -2) + "-" + str.slice(-2);
  }

  addContact = data => {
    const contactId = nanoid();
    const { contacts } = this.state

    const contact = {id: contactId, name: data.name, number: this.formatPhoneNumber(data.number),};

    contacts.filter(contact => contact.name.toLowerCase() === data.name.toLowerCase()).length > 0
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({contacts: this.state.contacts.filter(contact => contact.id !== contactId)}))
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: theme.colors.iconColor, size: "2em", className: "global-class-name" }}>
      <Container>
        <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />  
        </Section>
        <Section>
        <Title>Contacts</Title>  
        <Filter value={filter} onChange={this.changeFilter} />
        </Section>
        <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
        </Container>
      </IconContext.Provider>
    )
  }
}

export default App;