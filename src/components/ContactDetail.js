import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/contact-image.jpg';

function ContactDetail(props) {
  const {name, email} = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={profileImage} alt="프로필 이미지" />
        </div>
        <div className="content">
          <h4 className="header">{name}</h4>
          <span className="description">{email}</span>
        </div>
      </div>
      <Link to="/">
        <button className="ui basic button">
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  )
}

export default ContactDetail;
