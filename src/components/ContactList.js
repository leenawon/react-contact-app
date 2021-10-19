import React from 'react';
import SingleContact from './SingleContact';

function ContactList(props) {
  const contacts = props.contacts;

  return (
    <div className="ui celled list">
      <h4>연락처</h4>
      {contacts.map((contact) => (
        // Single Contact Component
        <SingleContact key={contact.id} contact={contact} />
      ))}
    </div>
  )
}

export default ContactList;
