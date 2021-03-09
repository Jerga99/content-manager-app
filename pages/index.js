

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
  // [stateValue, mutateState]
  const [myValue, setValue] = useState(10);
  // const value = valueState[0];
  // const setValue = valueState[1];

  return (
    <>
      valueState: { myValue }
      <h1>Hello World</h1>
      <CompA />
    </>
  )
}


export default Home;
