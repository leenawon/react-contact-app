import React from 'react';
import { Link } from 'react-router-dom';
import SingleContact from './SingleContact';

function ContactList(props) {
  const contacts = props.contacts;

  function deleteContact(id) {
    props.removeContact(id);
  }

  return (
    <>
      <Link to="/add-contact">
        <button className="ui basic button">
          <i className="icon user"></i>
          연락처 추가
        </button>
      </Link>
      <div className="ui celled list">
        <h4>연락처</h4>
        {contacts.map((contact) => (
          <SingleContact key={contact.id} contact={contact} deleteContact={deleteContact} />
        ))}
      </div>
    </>
  )
}

export default ContactList;
