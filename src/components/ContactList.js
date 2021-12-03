import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SingleContact from './SingleContact';

function ContactList(props) {
  const contacts = props.contacts;
  const inputElement = useRef("");

  function getSearchWord() {
    props.searchWord(inputElement.current.value);
  }

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
        <div className="ui search">
          <div className="ui icon input">
            <input ref={inputElement} type="text" className="prompt" value={props.search} placeholder="연락처를 검색하세요" onChange={getSearchWord}/>
            <i className="search icon"></i>
          </div>
        </div>
        {contacts.length > 0 ? contacts.map((contact) => (
          <SingleContact key={contact.id} contact={contact} deleteContact={deleteContact} />
        )) : "검색 결과가 없습니다"}
      </div>
    </>
  )
}

export default ContactList;
