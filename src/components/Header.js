import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="ui container">
      <Link to="/">
        <h2 className="ui center aligned grey icon header">
          <i className="circular users icon"></i>
          나만의 연락처 리스트
        </h2>
      </Link>
    </div>
  )
}

export default Header;
