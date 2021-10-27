import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/contact-image.jpg';

function SingleContact(props) {
  const {id, name, email} = props.contact;

  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={profileImage} alt="프로필 이미지"/>
      <div className="content">
        <Link to={{pathname: `/contact/${id}`, state:{contact: props.contact}}}>
          <h4 className="header">{name}</h4>
          <span>{email}</span>
        </Link>
      </div>
      <i className="trash alternate outline icon" onClick={() => props.deleteContact(id)}></i>
    </div>
  )
}

export default SingleContact;
