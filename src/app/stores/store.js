import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import { initialState } from '../redusers/CardRedusers';
import { indexRedusers } from '../redusers/indexReduser';

const logger = createLogger({
	duration: true,
});

const middleware = applyMiddleware(thunk, logger, promise);

export const store = createStore(indexRedusers, initialState, middleware);
