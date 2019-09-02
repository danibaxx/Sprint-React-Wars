import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './components/Character';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);
    console.log("Data", data)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        // console.log("Response", response.data.results)
        setData(response.data.results)
      })
      .catch(error => {
        console.log("Error", error)
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="characters">
        {data.map(data => (
          <Character 
            name={ data.name }
            birth={ data.birthYear }
            gender={ data.gender }
            height={ data.height }
            hair={ data.hairColor }
            eye={ data.eyeColor }
          />
        ))}

      </div>
    </div>
  );
}

export default App;
