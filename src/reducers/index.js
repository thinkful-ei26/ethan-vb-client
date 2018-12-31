import {combineReducers} from 'redux';
import {tripsReducer} from './trips';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  // form: formReducer,
  tripsReducer
});

export default rootReducer;