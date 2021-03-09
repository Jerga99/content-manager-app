import React from "react";



const ArrowFunction = _ =>
  <div>
    <h1>I am arrow function</h1>
  </div>



function CompA(){
  return (
    <>
      <ArrowFunction />
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
  return (
    <>
      <h1>Hello World</h1>
      <CompA />
    </>
  )
}


export default Home;
