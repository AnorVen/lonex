import * as CardConst from '../constants/CardConst';

export const cardReduser = (state = { products: [], is_fetching: false }, action) => {
	switch (action.type) {
		case CardConst.FETCH_CARD_PENDING: {
			return (state = { ...state, is_fetching: true });
		}
		case CardConst.FETCH_CARD_FULFILLED: {
			return (state = {
				...state,
				is_fetching: false,
				products: action.payload.data,
			});
		}
		case CardConst.FETCH_CARD_REJECTED: {
			return (state = {
				...state,
				is_fetching: false,
				error_message: action.payload.message,
			});
		}
		case CardConst.ITEM_DEL: {
			return (state = {
				...state,
				is_fetching: false,
				products: action.payload.data,
			});
		}
		case CardConst.ITEM_INC: {
			return (state = {
				...state,
				is_fetching: false,
				products: action.payload.data,
			});
		}
		case CardConst.ITEM_DEC: {
			return (state = {
				...state,
				is_fetching: false,
				products: action.payload.data,
			});
		}

		default:
			return state;
	}
};
