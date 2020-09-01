import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Potato from './Potato';


function Potato({fav, age}) {
  console.log({fav},{age});
  return (
    <h2>Potato {fav} {age}</h2>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Potato 
        fav="jiwoo"
        age="5"
      />

      <Potato 
        fav="nayoung" 
        age="45"
      />

      <Potato 
        fav="jintae" 
        age="45"
      />
    </div>
  );
}

export default App;
