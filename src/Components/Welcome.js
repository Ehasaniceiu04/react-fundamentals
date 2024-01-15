import React, { useState } from "react";

function Welcome(props) {
  let [firstName, setFirstName] = useState("Ehasanul");
  let [lastName, setLastName] = useState("Hoque");
  function handleNameChange(){
    setFirstName('Abdul')
    setLastName('Hamid')
  }
  return (
    <>
      <h1>
        Welcome {firstName} {lastName}
      </h1>
      <button onClick={handleNameChange}>ChangeName</button>
    </>
  );
}

export default Welcome;
