import React, { useState } from 'react';

function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const contact = {name, email};

  function nameOnChange(e) {
    setName(e.target.value);
  }

  function emailOnChange(e) {
    setEmail(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    if(name === "" || email === "") {
      alert('모든 항목을 입력해주세요!');
    } else {
      setName("");
      setEmail("");
      props.addContact(contact);
      props.history.push("/");
    }
  }

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={formSubmitHandler}>
        <div className="required field">
          <label>이름</label>
          <input type="text" name="name" placeholder="이름을 입력하세요" value={name} onChange={nameOnChange}></input>
        </div>
        <div className="required field">
          <label>이메일</label>
          <input type="text" name="email" placeholder="이메일 주소를 입력하세요" value={email} onChange={emailOnChange}></input>
        </div>
        <button className="ui inverted grey button">추가</button>
      </form>
    </div>
  )
}

export default AddContact;

