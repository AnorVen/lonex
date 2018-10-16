import React, { Component, Fragment } from 'react';
import cansel from '../../../imgs/cancel.png';
import Promocode from './promocod';

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: this.props.products,
		};
	}

	render() {
		let products = this.state.products.map(function(item, index) {
			return (
				<div className="product__item" key={index}>
					<div className="product__img product__item--product">
						<img src={item.img} alt={item.title} />
					</div>
					<div className="product__info product__item--info">
						<h4 className="product__itemTitle">{item.title}</h4>
						<span className="product__code">Код: {item.code}</span>
						<span className="product__size">Размер: {item.size}</span>
						<span className="product__color">Цвет: {item.color}</span>
					</div>
					<div className="product__quantity product__item--quantity">
						<button className="quantity__dic">-</button>
						<span className="quantity__res">{item.quantity}</span>
						<button className="quantity__inc">+</button>
					</div>
					<div className="product__price product__item--price">
						<span className="price">{item.price} руб.</span>
					</div>
					<div className="product__del product__item--del">
						<button className="del__btn">
							<img src={cansel} alt="удалить товар" />
						</button>
					</div>
				</div>
			);
		});
		return (
			<div className="product">
				<div className="product__header">
					<div className="product__title product__title--product">
						<span>Товар</span>
					</div>
					<div className="product__title product__title--info">
						<span>Описание</span>
					</div>
					<div className="product__title product__title--quantity">
						<span>Количество</span>
					</div>
					<div className="product__title product__title--price">
						<span>Цена</span>
					</div>
					<div className="product__title product__title--del">
						<span>Удалить</span>
					</div>
				</div>
				<div className="product__list">{products}</div>
				<Promocode summ />
			</div>
		);
	}
}
