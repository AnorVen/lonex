import * as TotalCheckout from '../constants/TotalCheckoutConst';
export const totalCheckout = 0;

export const totalCheckoutReduser = (state = { totalCheckout, is_fetching: false }, action) => {
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
