import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const menuList = [
  {
    id: 1,
    parentId: 0,
    title: "Одежда и аксессуары",
    href: "/dress"
  },
  {
    id: 2,
    parentId: 0,
    title: "Обувь",
    href: "/footwear",
    submenuItem: []
  },
  {
    id: 3,
    parentId: 0,
    title: "Украшения",
    href: "/jewelery",
    submenuItem: []
  },
  {
    id: 4,
    parentId: 0,
    title: "Красота и здоровье",
    href: "/health-and-beauty",
    submenuItem: []
  },
  {
    id: 5,
    parentId: 0,
    title: "Товары для дома",
    href: "/household",
    submenuItem: []
  },
  {
    id: 6,
    parentId: 0,
    title: "Товары для кухни",
    href: "/kitchen",
    submenuItem: []
  },
  {
    id: 7,
    parentId: 1,
    title: "Женская одежда",
    href: "/dress-wom"
  },
  {
    id: 8,
    parentId: 1,
    title: "Мужская одежда",
    href: "/dress-men"
  },
  {
    id: 9,
    parentId: 1,
    title: "Аксессуары",
    href: "/acces"
  }
];

let menuHendler = menuList => {
  let newmenuList = [];
  for (let i = 0; i < menuList.length; i++) {
    menuList[i].submenu = [];
    if (menuList[i].parentId !== 0) {
      let a = menuList[i].parentId - 1;
      menuList[a].submenu.push(menuList[i]);
    } else {
      newmenuList.push(menuList[i]);
    }
  }
  return newmenuList;
};

export default class Nav extends Component {
  render() {
    let menu = menuHendler(menuList).map(function(item, index) {
      return (
        <li key={"menuItem" + index} className="mainMenu__item">
          <Link to={item.href}>{item.title}</Link>
          {item.submenu !== 0 ? (
            <ul>
              {item.submenu.map(function(item, index) {
                return (
                  <li key={"menuItem" + index} className="mainMenu__item">
                    <Link to={item.href}>{item.title}</Link>
                  </li>
                );
              })}{" "}
            </ul>
          ) : null}
        </li>
      );
    });

    return (
      <div className="nav">
        <div className="wrapper">
          <ul className="mainMenu__list">{menu}</ul>
        </div>
      </div>
    );
  }
}
