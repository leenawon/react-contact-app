import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { v4 as uuid_v4 } from 'uuid';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  function addContact(contact) {
    setContacts([...contacts, {id: uuid_v4(), ...contact}]);
  }

  function removeContact(id) {
    const refreshContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(refreshContact);
  }

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
    if(getContacts) {
      setContacts(getContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
