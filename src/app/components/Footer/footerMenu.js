import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FooterMenu extends Component {
  render() {
    let menu = this.props.footerMenu.map(function(item, index) {
      return (
        <li
          key={index}
          className={
            index === 0 ? "footerNav__item footerNav__title" : "footerNav__item"
          }
        >
          {index === 0 ? (
            <span>{item.title}</span>
          ) : (
            <Link to={item.href}>{item.title}</Link>
          )}
        </li>
      );
    });

    return (
      <div>
        <ul className="footerNav__list">{menu}</ul>
      </div>
    );
  }
}
