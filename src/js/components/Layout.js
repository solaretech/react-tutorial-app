import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {title: "Welcome"};
  };
  render() {
    setTimeout(
      () => {
        this.setState({title: "Welcome kakuny!"});
      }, 3000
    );
    return (
      <div>
        <Header title={thi.state.title} />
        <Header title="thank you" />
        <Footer />
      </div>
    );
  }
}