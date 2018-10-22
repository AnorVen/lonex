import React, { Component } from 'react';
import Addtoorder from './addToOrder';
import Product from './products';

import { itemInc } from '../../actions/cardActions';
import { connect } from 'react-redux';

class CardLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, img, price, code, size, color, quantity } = this.props;
		return (
			<div className="cardLayout">
				<div className="wrapper">
					<div className="cardLayout__title">
						<h3>Ваша корзина</h3>
					</div>

					{this.props.products.length !== 0 ? (
						<div>
							<h2>action</h2>
							<Product products={this.props.products} itemInc={itemInc} />
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
		products: store.products,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		itemInc: id => dispatch(itemInc(id)),
	};
};

export default connect(mapStateToProps)(CardLayout);
