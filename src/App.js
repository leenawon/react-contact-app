import React from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const contacts = [
    {
      id: "1",
      "name": "naoni",
      "email": "naoni@gmail.com"
    },
    {
      id: "2",
      "name": "daoni",
      "email": "daoni@gmail.com"
    },
    {
      id: "3",
      "name": "kyoungho",
      "email": "kyoungho@gmail.com"
    }
  ];

  return (
    <div className="ui container">
      {/* Header Component */}
      <Header />
      {/* Add Contact Component */}
      <AddContact />
      {/* Contact List Component */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
