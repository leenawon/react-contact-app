import React from 'react';
import profileImage from '../images/contact-image.jpg';

function SingleContact({contact}) {
  return (
    <div className="item" key={contact.id}>
      <img className="ui avatar image" src={profileImage} alt="프로필 이미지"/>
      <div className="content">
        <h4 className="header">{contact.name}</h4>
        <span>{contact.email}</span>
      </div>
      <i className="trash alternate outline icon" style={{color:"red"}}></i>
    </div>
  )
}

export default SingleContact;
