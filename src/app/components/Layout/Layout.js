import React, { Component } from "react";
import Header from "../Header/header";

export default class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">{this.props.children}</div>
        <div>footer</div>
      </div>
    );
  }
}
