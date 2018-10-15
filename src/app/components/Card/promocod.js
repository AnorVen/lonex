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
					<div className="product__total total">
						<div className="total__text">
							<p className="total__text--sum">Сумма заказа:</p>
							<p className="total__text--promo">Промокод:</p>
							<p className="total__text--all">Всего:</p>
						</div>
						<div className="total__sum">
							<p className="total__sum--sum">9 800 руб.</p>
							<p className="total__sum--promo">-1 800 руб.</p>
							<p className="total__sum--all">8 000 руб.</p>
							<button className="total__сheckout">Оформить заказ</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
