import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {name: "Kakuny"};
  };
  render() {
    let components = [<Header />, <Footer />];
    setTimeout(
      () => { this.setState({name: "Hello!"}); }
    , 1000);
    return (
      <div>
        {this.state.name}
        {components}
      </div>
    );
  }
}