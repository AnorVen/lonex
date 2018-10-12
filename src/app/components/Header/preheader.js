import React, { Component } from "react";
import yth from "../../../imgs/you-head.png";
import onlineVid from "../../../imgs/head-ef.png";
import blogLogo from "../../../imgs/head_blog.png";

export default class Preheader extends Component {
  render() {
    return (
      <div className="preHeader">
        <div className="wrapper">
          <div className="phone">
            <div className="phone__number">8 (800) 500-75-55</div>
            <div className="phone__text">Бесплатный звонок по России</div>
          </div>
          <div className="video">
            <div className="blog">
              <div className="blog__img">
                <img src={blogLogo} alt="Звездный блог" />
              </div>
              <div className="blog__text">Звездный блог</div>
            </div>
            <div className="youtubeHeader">
              <div className="youtubeHeader__logo">
                <img src={yth} alt="Смотрите нас на YouTube" />
              </div>
              <div className="youtubeHeader__text">Смотрите нас на YouTube</div>
            </div>
            <div className="onlineVideo">
              <div className="onlineVideo__logo">
                <img src={onlineVid} alt="Смотрите наш прямой эфир" />
              </div>
              <div className="onlineVideo__text">Смотрите наш прямой эфир</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
