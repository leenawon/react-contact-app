import React from 'react';
import './App.css';
import AddContact from './components/AddContact';
import Header from './components/Header';

function App() {
  return (
    <div className="ui container">
      {/* Header Component */}
      <Header />
      {/* Add Contact Component */}
      <AddContact />
    </div>
  );
}

export default App;
