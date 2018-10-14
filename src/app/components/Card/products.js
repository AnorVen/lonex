import React, { Component, Fragment } from 'react';
import cansel from '../../../imgs/cancel.png';

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}
	componentDidMount() {
		this.setState({
			products: this.props.products,
		});
	}

	render() {
		console.log(this.state);
		let products = this.state.products.map(function(item, index) {
			return (
				<div className="product__item" key={index}>
					<div className="product__img">
						<img src={item.img} alt={item.title} />
					</div>
					<div className="product__info">
						<h4 className="product__title">{item.title}</h4>
						<span className="product__code">Код: {item.code}</span>
						<span className="product__size">Размер: {item.size}</span>
						<span className="product__color">Цвет: {item.colon}</span>
					</div>
					<div className="product__quantity">
						<button className="quantity__dic">-</button>
						<span className="quantity__res">{item.quantity}</span>
						<button className="quantity__inc">+</button>
					</div>
					<div className="product__price">
						<span className="price">{item.price} руб.</span>
					</div>
					<div className="product__del">
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
					<div className="product__title">
						<span>Товар</span>
					</div>
					<div className="product__title">
						<span>Описание</span>
					</div>
					<div className="product__title">
						<span>Количество</span>
					</div>
					<div className="product__title">
						<span>Цена</span>
					</div>
					<div className="product__title">
						<span>Удалить</span>
					</div>
				</div>
				<div className="product__list">{products}</div>
			</div>
		);
	}
}
