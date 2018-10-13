import React, { Component } from "react";
import footerLogo from "../../../imgs/footer-log.png";
import { Link } from "react-router-dom";

export default class FooterLogo extends Component {
  render() {
    return (
      <div className="footerLogo">
        <div className="footerLogo__img">
          <img src={footerLogo} alt="Лого" />
        </div>
        <div className="footerLogo__contacts">
          <Link to="tel:88005007555">8 (800) 500-75-55*</Link>
          <p className="footerLogo__text">*Бесплатный звонок по всей России</p>
          <Link to="tel:84957339603">8 (495) 733-96-03</Link>
        </div>
      </div>
    );
  }
}
