import React from "react";

function PropsExample() {
  let name = "Alexa";
  let age = 7;

  return (
    <PropsNew message={name} age={age} />
  );
}

function PropsNew(props) {
  return (
    <div>
      <h1>Name: {props.message}</h1>
      <h1>Age: {props.age}</h1>
    </div>
  );
}

export default PropsExample;