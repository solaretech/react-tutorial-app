import React from "react"

export default class Layout extends React.Component {
  constructor(){
    super();
    this.name = "Kakuny"
  };
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <h1>I'm {this.name}!</h1>
      </div>
    );
  }
}