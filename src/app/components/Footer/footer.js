import React, { Component, Fragment } from "react";
import Social from "./social";
import Copy from "./copy";
import FooterLogo from "./footerLogo";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Social />
        <div className="footerMenu">
          <div className="wrapper">
            <FooterLogo />
          </div>
        </div>
        <Copy />
      </Fragment>
    );
  }
}
