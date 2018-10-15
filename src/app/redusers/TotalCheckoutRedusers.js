import * as TotalCheckout from '../constants/TotalCheckoutConst';

export const totalCheckoutReduser = (state = { totalCheckout: 0, is_fetching: false }, action) => {
	switch (action.type) {
		case TotalCheckout.CARD_CHECKOUT: {
			return (state = {
				...state,
				is_fetching: false,
				totalCheckout: action.payload.data,
			});
		}
		default:
			return state;
	}
};
