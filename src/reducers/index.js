import {combineReducers} from 'redux';
import trips from './trips';
import auth from './auth';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  trips,
  auth
});

export default rootReducer;