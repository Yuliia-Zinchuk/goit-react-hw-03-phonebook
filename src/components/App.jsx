import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = data => {
    if (this.state.contacts.find(contact => contact.name === `${data.name}`)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      filter: value,
    });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  componentDidMount() {
    // console.log('App componentDidMount');
    const parsedContacts = localStorage.getItem('contacts');
    console.log(parsedContacts);
    //  this.state.contacts = currentTime;
    if (parsedContacts) {
      this.setState(() => ({
        contacts: JSON.parse(parsedContacts),
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');
    // console.log(prevState);
    // console.log(this.state);
    if (this.state.contacts !== prevState.contacts) {
      console.log('обновилось поле contacts');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    // const { contacts, filter } = this.state;
    const {
      state: { contacts, filter },
      onAddContact,
      handleChange,
      onDeleteContact,
    } = this;

    return (
      <>
        <Section title="Phonebook">
          <ContactsForm onSubmit={onAddContact} />
        </Section>

        <Section title="Contacts">
          {<Filter handleChange={handleChange} />}
          {contacts && (
            <ContactsList
              contacts={contacts}
              filter={filter}
              onDeleteContact={onDeleteContact}
            />
          )}
        </Section>
      </>
    );
  }
}
