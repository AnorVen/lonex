import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import { indexRedusers } from '../redusers/indexReduser';

const logger = createLogger({
	duration: true,
});

const middleware = applyMiddleware(thunk, logger, promise);

export const store = createStore(indexRedusers, middleware);
