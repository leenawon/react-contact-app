import React, { useState } from 'react';

function UpdateContact(props) {
  const {id, name, email} = props.location.state.contact;
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);

  const contact = {id, name: updateName, email: updateEmail};

  function nameOnChange(e) {
    setUpdateName(e.target.value);
  }

  function emailOnChange(e) {
    setUpdateEmail(e.target.value);
  }

  function formUpdateHandler(e) {
    e.preventDefault();
    if(updateName === "" || updateEmail === "") {
      alert('모든 항목을 입력해주세요!');
    } else {
      props.updateContact(contact);
      props.history.push("/");
    }
  }

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={formUpdateHandler}>
        <div className="required field">
          <label>이름</label>
          <input type="text" name="name" placeholder="이름을 입력하세요" value={updateName} onChange={nameOnChange}></input>
        </div>
        <div className="required field">
          <label>이메일</label>
          <input type="text" name="email" placeholder="이메일 주소를 입력하세요" value={updateEmail} onChange={emailOnChange}></input>
        </div>
        <button className="ui inverted grey button">수정</button>
      </form>
    </div>
  )
}

export default UpdateContact;

