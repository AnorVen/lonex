import React, { Component } from 'react';
import Addtoorder from './addToOrder';
import Product from './products';

import { itemInc } from '../../actions/cardActions';
import { connect } from 'react-redux';

class CardLayout extends Component {
	render() {
		const { itemIncAction } = this.props;
		return (
			<div className="cardLayout">
				<div className="wrapper">
					<div className="cardLayout__title">
						<h3>Ваша корзина</h3>
					</div>

					{this.props.products.length !== 0 ? (
						<div>
							<h2>action</h2>
							<Product products={this.props.products} />
						</div>
					) : (
						<div className="cardLayout__poproducts">
							<h3>Карзина пуста!</h3>
							<button onClick={itemInc}>Загрузить товары</button>
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
const mapDispatchToProps = dispatch => {
	return {
		itemIncAction: () => dispatch(itemInc),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardLayout);
