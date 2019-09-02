import React from 'react';

const Character = (props) => {
  return(
<div className="chracter">
    <h3>Name: {props.name}</h3>
    <p>Birth Year: {props.birth_year}</p>
    <p>Gender: {props.gender}</p>
    <p>Height: {props.height}</p>
    <p>Hair Color: {props.hair_color}</p>
    <p>Eye Color: {props.eye_color}</p>
</div>
  );
}

export default Character;