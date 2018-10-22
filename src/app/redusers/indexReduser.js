import { cardReduser } from './CardRedusers';
import { totalCheckoutReduser } from './TotalCheckoutRedusers';
import { combineReducers } from 'redux';

export const indexRedusers = combineReducers({
	products: cardReduser,
	totalCheckout: totalCheckoutReduser,
});
