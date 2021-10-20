import React from 'react';
import profileImage from '../images/contact-image.jpg';

function SingleContact(props) {
  const contact = props.contact;
  const id = contact.id;

  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={profileImage} alt="프로필 이미지"/>
      <div className="content">
        <h4 className="header">{contact.name}</h4>
        <span>{contact.email}</span>
      </div>
      <i className="trash alternate outline icon" onClick={() => props.deleteContact(id)}></i>
    </div>
  )
}

export default SingleContact;
