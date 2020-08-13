import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {name: "Kakuny"};
  };
  render() {
    const title = "Welcome Kakuny!";
    return (
      <div>
        <Header title={title} />
        <Header title="thank you" />
        <Footer />
      </div>
    );
  }
}