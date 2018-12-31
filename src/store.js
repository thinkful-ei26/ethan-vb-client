import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

// import {tripsReducer} from './reducers/trips';

export default createStore(rootReducer, applyMiddleware(thunk));