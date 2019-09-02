import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './components/Character';

import './App.css';

const App = () => {
  const [swData, setSWData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        console.log("Response", response.data)
        setSWData(response.data)
      })
      .catch(error => {
        console.log("Error", error)
      })
  }, []);

  return (
    <div className="app-container">
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Character 
          name={ swData. name }
          birth= "some birth year"
          gender= "some gender"
          height= "some height"
          hair= "some hair color"
          eye= "some eye color"
        />
      </div>
    </div>
  );
}

export default App;
