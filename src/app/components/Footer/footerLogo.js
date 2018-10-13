import React, { Component } from "react";
import footerLogo from "../../../imgs/footer-log.png";

export default class FooterLogo extends Component {
  render() {
    return (
      <div className="footerLogo">
        <div className="footerLogo__img">
          <img src={footerLogo} alt="Лого" />
        </div>
        <div className="footerLogo__contacts">
          <a className="footerLogo__link" href="tel:88005007555">
            8 (800) 500-75-55*
          </a>
          <p className="footerLogo__text">*Бесплатный звонок по всей России</p>
          <a className="footerLogo__link" href="tel:84957339603">
            8 (495) 733-96-03
          </a>
        </div>
      </div>
    );
  }
}
