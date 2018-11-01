import React, { Component } from 'react';

export default class Copy extends Component {
	render() {
		return (
			<div className="copy">
				<div className="wrapper">
					<p className="copy__text">
						Copyright © Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.
					</p>
					<p className="copy__text">
						При использовании материалов сайта ссылка на www.shop24.com обязательна.
					</p>
					<p className="copy__text">115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII</p>
					<p className="copy__text"> Телефон 8 800 500-75-55</p>
				</div>
			</div>
		);
	}
}
