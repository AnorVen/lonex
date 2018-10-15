import React, { Component } from 'react';
import Addtoorder from './addToOrder';
import Product from './products';

import { fetchCard } from '../../actions/cardActions';
import { connect } from 'react-redux';

/*const products = [
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
];*/

class CardLayout extends Component {
	constructor(props) {
		super(props);
		let products = fetchCard;
		this.props.dispatch(products);
	}

	render() {
		return (
			<div className="cardLayout">
				<div className="wrapper">
					<div className="cardLayout__title">
						<h3>Ваша корзина</h3>
					</div>
					{this.props.products ? (
						<Product products={this.props.products} />
					) : (
						<div className="cardLayout__poproducts">
							<h3>Карзина пуста!</h3>
						</div>
					)}
					<Addtoorder />
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	console.log(store);
	return {
		products: store.products.products,
	};
};

export default connect(mapStateToProps)(CardLayout);
