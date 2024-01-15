import React from "react";
import Person from "./Person";

function PersonList() {
  const numbers = [1, 2, 3];
  let persons=[
    {id:1,firstName:'Ehasanul', lastName:'Hoque'},
    {id:2,firstName:'Morzina', lastName:'Akter'}
];

  const newArray = persons.map((x,index)=><Person key={index} person={x}></Person>);
  return (
      <ul>{newArray}</ul>
  );
}

export default PersonList;
