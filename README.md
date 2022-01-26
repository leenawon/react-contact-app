## React 공부하면서 만들어보는 연락처 app

### 💻 나만의 연락처 리스트를 만들 수 있는 사이트 제작

### 사용 기술

- React.js
- json server
- semantic-ui

---

### **웹 사이트** 모습

- 메인 페이지

  - 일렬로 타이틀과 연락처 추가 버튼, 검색어 입력란 및 연락처 리스트를 나열
  - <img src="https://user-images.githubusercontent.com/76942087/150505631-24f80518-8cf6-4bbe-9ac4-15e54ecc06b4.png" width="300" height="150"/>

  - 검색어를 입력하면 나오는 결과
  - <img src="https://user-images.githubusercontent.com/76942087/150507542-474386ba-c8a6-4c27-b3d7-d50c9ce6c988.png" width="300" height="150"/>
  - <img src="https://user-images.githubusercontent.com/76942087/150507725-60a9672b-12eb-478a-b0c5-2b05041a41e3.png" width="300" height="150"/>

- 연락처 상세 페이지

  - 연락처의 사진과 이름, 이메일 정보를 보여주고, 하단에 홈 버튼 제작
  - <img src="https://user-images.githubusercontent.com/76942087/150506037-816c3362-d449-45f0-8e3e-2bec102dbdf1.png" width="300" height="150"/>

- 연락처 추가 페이지

  - 이름과 이메일을 입력할 수 있도록 form 제작
  - <img src="https://user-images.githubusercontent.com/76942087/150506365-b57a5cb4-e206-43e8-86f8-f96163d292b7.png" width="300" height="150"/>

---

### Advanced Feature

- 검색어에 대한 결과를 판별하는 검색 기능을 담당하는 함수

```js
function searchHandler(searchWord) {
  setSearch(searchWord);
  if (searchWord !== "") {
    const searchContacts = contacts.filter((contact) => {
      return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    setSearchResult(searchContacts);
  } else {
    setSearchResult(contacts);
  }
}
```
