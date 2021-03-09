

import React, { useState } from "react";

function CompA(allProps){
  return (
    <>
      <h1>CompA</h1>
      <p>Hello Comp A</p>
      <div>My Prop1: {allProps.myProp1}</div>
      <div>My Prop2: {allProps.myProp2}</div>
      <div>My Prop3: {allProps.myProp3.toString()}</div>
      <div>My Prop4: {<allProps.myProp4 />}</div>
    </>
  )
}

class CompC extends React.Component {

  constructor() {
    super();
    this.state = {
      myValue: 10
    }
  }

  changeState(incrementor) {
    this.setState({
      myValue: incrementor
    })
  }

  render() {
    const { myValue } = this.state;

    return (
      <>
        <h1>Hello CompC</h1>
        Current Value: <h1>{ myValue }</h1>
        <button onClick={() => this.changeState(myValue+1)}>+</button>
        <button onClick={() => this.changeState(myValue-1)}>-</button>
      </>
    )
  }
}

function Home() {
  const [myValue, setValue] = useState(10);

  return (
    <>
      Current Value: <h1>{ myValue }</h1>
      <button onClick={() => setValue(myValue+1)}>+</button>
      <button onClick={() => setValue(myValue-1)}>-</button>
      <CompA
        myProp1={myValue}
        myProp2="My Custom Value"
        myProp3={true}
        myProp4={() => <div>My NEW JSX!</div>}
      />
    </>
  )
}


export default Home;
