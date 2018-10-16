import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import { cardReduser } from '../redusers/CardRedusers';
import { totalCheckoutReduser } from '../redusers/TotalCheckoutRedusers';

const redusers = combineReducers({
	products: cardReduser,
	totalCheckout: totalCheckoutReduser,
});

const logger = createLogger({
	duration: true,
});
const initialState = {};

const middleware = applyMiddleware(thunk, promise, logger);

export const store = createStore(redusers, initialState, middleware);
