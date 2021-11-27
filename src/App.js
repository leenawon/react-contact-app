import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { v4 as uuid_v4 } from 'uuid';
import contactsApi from './api/contactsApi';
import './App.css';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import ContactList from './components/ContactList';
import Header from './components/Header';
import UpdateContact from './components/UpdateContact';

function App() {
  const [contacts, setContacts] = useState([]);

  async function addContact(contact) {
    const request = { id: uuid_v4(), ...contact };
    const response = await contactsApi.post('/contacts', request);
    setContacts([...contacts, response.data]);
  }

  async function updateContact(contact) {
    const response = await contactsApi.put(`/contacts/${contact.id}`, contact);
    const {id} = response.data;
    setContacts(contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact;
    }));
  }

  async function removeContact(id) {
    await contactsApi.delete(`/contacts/${id}`);
    const refreshContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(refreshContact);
  }

  // get Contacts From Contacts Api
  async function getContactsFromApi() {
    const response = await contactsApi.get("/contacts");
    return response.data;
  }

  useEffect(() => {
    const getContacts = async () => {
      const allContacts = await getContactsFromApi();
      if(allContacts) {
        setContacts(allContacts);
      }
    }
    getContacts();
  }, []);

  return (
    <div className="ui container">
      <BrowserRouter>
        {/* Header Component */}
        <Header />
        <Switch>
          {/* Contact List Component */}
          <Route exact path="/" render={(props) => (<ContactList {...props} contacts={contacts} removeContact={removeContact} />)} /> 
          {/* Add Contact Component */}
          <Route path="/add-contact" render={(props) => <AddContact {...props} addContact={addContact} />} />
          {/* Update Contact Component */}
          <Route path="/update" render={(props) => <UpdateContact {...props} updateContact={updateContact} />} />
          {/* Contact Detail Component */}
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
