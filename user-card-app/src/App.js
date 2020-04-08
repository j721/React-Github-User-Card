import React from 'react';
import UserList from "./components/UserList";
import './App.css';
import styled from 'styled-components';


function App(){
  return (
    <div className="App">
      <header className="App-header">
       <h1>GitHub UserCard</h1>
      </header>
      <UserList/>
    </div>
  );
}

export default App;
