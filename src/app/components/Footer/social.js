import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import vk from "../../../imgs/vk.png";
import fb from "../../../imgs/fb.png";
import ok from "../../../imgs/ok.png";
import pnt from "../../../imgs/pent.png";
import pin from "../../../imgs/pin.png";
import inst from "../../../imgs/insta.png";
import you from "../../../imgs/you.png";

const socialList = [
  {
    id: 1,
    title: "vk.com",
    img: vk,
    href: "https://vk.com"
  },
  {
    id: 2,
    title: "fb.com",
    img: fb,
    href: "https://fb.com"
  },
  {
    id: 3,
    title: "ok.ru",
    img: ok,
    href: "https://ok.ru"
  },
  {
    id: 4,
    title: "pinterest",
    img: pnt,
    href: "https://www.pinterest.com/"
  },
  {
    id: 5,
    title: "pinme",
    img: pin,
    href: "https://www.pinme.ru/"
  },
  {
    id: 6,
    title: "instagram",
    img: inst,
    href: "https://www.instagram.com/"
  },
  {
    id: 7,
    title: "youtube",
    img: you,
    href: "https://www.youtube.com/"
  }
];

export default class Social extends Component {
  render() {
    let social = socialList.map(function(item, index) {
      return (
        <Link key={index} className="social__item" to={item.href}>
          <img src={item.img} alt={item.title} />
        </Link>
      );
    });
    return (
      <div className="social">
        <div className="wrapper">
          <div className="social__text">
            <p>SHOP24 в социальных сетях:</p>
          </div>
          <div className="social__list">{social}</div>
        </div>
      </div>
    );
  }
}
