import React from 'react';
import SingleContact from './SingleContact';

function ContactList(props) {
  const contacts = props.contacts;

  function deleteContact(id) {
    props.removeContact(id);
  }

  return (
    <div className="ui celled list">
      <h4>연락처</h4>
      {contacts.map((contact) => (
        <SingleContact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </div>
  )
}

export default ContactList;
