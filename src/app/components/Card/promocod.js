import React, { Component, Fragment } from 'react';

export default class Promocode extends Component {
	render() {
		return (
			<div className="product__promocode promocode">
				<div className="promocode__wrap">
					<div className="promocode__block">
						<h4>Есть промокод?</h4>
						<input className="promocode__input" type="text" placeholder="Введите промокод" />
						<button className="promocode__btn">Применить</button>
					</div>
					<div className="product__total">
						<div className="product__sum">
							<span>Сумма заказа:</span>
							<span />
						</div>
						<div className="product__promo">
							<span>Промокод:</span>
							<span />
						</div>
						<div className="product__all">
							<span>Всего:</span>
							<span />
						</div>
						<button className="product__сheckout">Оформить заказ</button>
					</div>
				</div>
			</div>
		);
	}
}
