import React, { useState, useEffect } from 'react';
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
      {/* Header Component */}
      <Header />
      {/* Add Contact Component */}
      <AddContact addContact={addContact} />
      {/* Contact List Component */}
      <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  );
}

export default App;
