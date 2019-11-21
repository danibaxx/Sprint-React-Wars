import React from 'react';

import styled from 'styled-components';

const CustomDiv = styled.div`
  background: transparent;
  max-height: 400px;
  width: 550px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 2px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 6px #443e3e, 0 3px 6px #443e3e;
`;

const CustomH3 = styled.h3`
  color: black;;
  text-shadow: 1px 1px 5px #fff;
  font-weight: bolder;
  font-size: 30px;
`;

const CustomP = styled.p`
  text-shadow: 1px 1px 5px black;
  color: bisque;
  font-size: 20px;
`;
const Character = (props) => {
  // console.log("Character", props)

  return(
    <CustomDiv>
        <CustomH3>Name: {props.name}</CustomH3>
        <CustomP>Birth Year: {props.birthYear}</CustomP>
        <CustomP>Gender: {props.gender}</CustomP>
        <CustomP>Height: {props.height}</CustomP>
        <CustomP>Hair Color: {props.hairColor}</CustomP>
        <CustomP>Eye Color: {props.eyeColor}</CustomP>
    </CustomDiv>
  );
}

export default Character;