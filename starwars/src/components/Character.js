import React from 'react';

const Character = (props) => {
  // console.log("Character", props)

  return(
    <div className="chracter">
      <h3>Name: {props.name}</h3>
      <p>Birth Year: {props.birthYear}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Hair Color: {props.hairColor}</p>
      <p>Eye Color: {props.eyeColor}</p>
    </div>
  );
}

export default Character;