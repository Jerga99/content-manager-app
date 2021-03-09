

import React, { useState } from "react";

function CompA(){
  return (
    <>
      <h1>CompA</h1>
      <p>Hello Comp A</p>
    </>
  )
}

class CompC extends React.Component {
  render() {
    return (
      <h1>Hello CompC</h1>
    )
  }
}

function Home() {
  const [myValue, setValue] = useState(10);

  console.log("I am called initialy and when state is changed!");

  const incementValue = () => {
    setValue(myValue + 1);
  }

  return (
    <>
      Current Value: <h1>{ myValue }</h1>
      <button onClick={incementValue}>+</button>
      <button>-</button>
      <CompA />
    </>
  )
}


export default Home;
