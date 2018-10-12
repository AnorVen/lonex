import Preheader from "./preheader";
import React, { Component, Fragment } from "react";
import Logo from "../../../imgs/logo1.png";
import search from "../../../imgs/search.png";
import account from "../../../imgs/user.png";
import card from "../../../imgs/bag-card.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Preheader />
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="headerSearch">
            <input type="text" placeholder="Поиск по сайту" />
            <button>
              <img src={search} alt="Поиск" />
            </button>
          </div>
          <div className="account">
            <Link to="/account">
              <img src={account} alt="Анастасия" />
              <span>Анастасия</span>
            </Link>
          </div>
          <div className="card">
            <Link to="/card">
              <img src={card} alt="" />
              <span>В корзине:</span>
              <span>4 товара</span>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
