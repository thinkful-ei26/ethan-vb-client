import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './components/local-storage';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
};

export default store;