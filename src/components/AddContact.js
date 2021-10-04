import React from 'react';

function AddContact() {
  return (
    <div className="ui container">
      <form className="ui form">
        <div className="required field">
          <label>이름</label>
          <input type="text" name="name" placeholder="이름을 입력하세요"></input>
        </div>
        <div className="required field">
          <label>이메일</label>
          <input type="text" name="email" placeholder="이메일 주소를 입력하세요"></input>
        </div>
        <button className="ui inverted grey button">추가</button>
      </form>
    </div>
  )
}

export default AddContact;

