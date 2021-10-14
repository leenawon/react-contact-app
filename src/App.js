import React, { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const [contacts, setContacts] = useState([]);

  function addContact(contact) {
    setContacts([...contacts, contact]);
  }

  return (
    <div className="ui container">
      {/* Header Component */}
      <Header />
      {/* Add Contact Component */}
      <AddContact addContact={addContact} />
      {/* Contact List Component */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
