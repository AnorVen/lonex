import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import add1 from '../../../imgs/dop1.jpg';
import add2 from '../../../imgs/dop2.jpg';
import add3 from '../../../imgs/dop3.jpg';
import add4 from '../../../imgs/dop4.jpg';

const dopOrder = [
	{
		title: 'Солнечные очки зеленого цвета в стиле ретро',
		img: add1,
		price: '2 450 руб.',
		href: '/',
	},
	{
		title: 'Шляпа',
		img: add2,
		price: '800 руб',
		href: '/',
	},
	{
		title: 'Платье-миди с расклешенной юбкой',
		img: add3,
		price: '2 450 руб',
		href: '/',
	},
	{
		title: 'Платье-миди с расклешенной юбкой',
		img: add4,
		price: '2 450 руб',
		href: '/',
	},
];

export default class Addtoorder extends Component {
	render() {
		let addorderItems = dopOrder.map(function(item, index) {
			return (
				<div className="addtoorder__item" key={index}>
					<Link className="addtoorder__link" to={item.href}>
						<img className="addtoorder__img" src={item.img} alt={item.title} />
						<p className="addtoorder__text">{item.title}</p>
						<p className="addtoorder__price">{item.price}</p>
					</Link>
				</div>
			);
		});

		return (
			<div className="addtoorder">
				<div className="addtoorder__title">
					<h3 className="title__text">Добавьте к вашему заказу</h3>
				</div>
				<div className="addtoorder__list">{addorderItems}</div>
			</div>
		);
	}
}
