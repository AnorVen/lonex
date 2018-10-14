import React, { Component } from 'react';
import Addtoorder from './addToOrder';
import Product from './products';
import tov1 from '../../../imgs/tov1.jpg';
import tov2 from '../../../imgs/tov2.jpg';
import tov3 from '../../../imgs/tov3.jpg';
import tov4 from '../../../imgs/tov3.jpg';

const products = [
	{
		title: 'Платье-миди с расклешенной юбкой',
		img: tov1,
		price: 2450,
		code: '82039-11',
		size: '44',
		color: 'синий',
		quantity: 1,
	},
	{
		title: 'Туфли женские украшенные кружевными вставками',
		img: tov2,
		price: 2450,
		code: '13524-01',
		size: 38,
		color: 'черный',
		quantity: 1,
	},
	{
		title: 'Платье-миди',
		img: tov3,
		price: 2450,
		code: '75039',
		size: 44,
		color: 'белый',
		quantity: 1,
	},
	{
		title: 'Платье-миди',
		img: tov3,
		price: 2450,
		code: '75039',
		size: 46,
		color: 'белый',
		quantity: 1,
	},
];

export default class CardLayout extends Component {
	render() {
		return (
			<div className="card">
				<div className="wrapper">
					<div className="card__title">
						<h3>Ваша корзина</h3>
					</div>
					{products ? (
						<Product products={products} />
					) : (
						<div className="card__poproducts">
							<h3>Карзина пуста!</h3>
						</div>
					)}
					<Addtoorder />
				</div>
			</div>
		);
	}
}
