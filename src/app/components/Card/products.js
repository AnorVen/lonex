import React, { Component, Fragment } from "react";

export default class Product extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Товар</th>
              <th>Описание</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            <tr />
          </tbody>
        </table>
      </div>
    );
  }
}
