import React, { Component } from 'react';
import Addtoorder from './addToOrder';
import Product from './products';

import { loadProducts } from '../../actions/cardActions';
import { connect } from 'react-redux';

class CardLayout extends Component {
	constructor(props) {
		super(props);
		loadProducts();
	}

	render() {
		return (
			<div className="cardLayout">
				<div className="wrapper">
					<div className="cardLayout__title">
						<h3>Ваша корзина</h3>
					</div>

					{this.props.productsAct.length !== 0 ? (
						<div>
							<h2>action</h2>
							<Product products={this.props.productsAct} />
						</div>
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
		productsAct: store.products,
	};
};

export default connect(mapStateToProps)(CardLayout);
