import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';

function App() {
  return (
    <div className="App">
      <Postform />
      <Posts />
    </div>
  );
}

export default App;
