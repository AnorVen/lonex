import React, { Component, Fragment } from "react";

export default class Copy extends Component {
  render() {
    return (
      <div className="copy">
        <div className="wrapper">
          <p>
            Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.
          </p>
          <p>
            {" "}
            При использовании материалов сайта ссылка на www.shop24.com
            обязательна.
          </p>
          <p>115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII</p>
          <p> Телефон 8 800 500-75-55</p>
        </div>
      </div>
    );
  }
}
