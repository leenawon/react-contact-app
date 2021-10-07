import React from 'react';

function ContactList({contacts}) {
  return (
    <div className="ui celled list">
      Contact List
      {contacts.map((contact) => (
        <div className="item" key={contact.id}>
          <div className="content">
            <h4 className="header">{contact.name}</h4>
            <span>{contact.email}</span>
          </div>
          <i className="trash alternate outline icon"></i>
        </div>
      ))}
    </div>
  )
}

export default ContactList;
