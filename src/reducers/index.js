import {combineReducers} from 'redux';
import trips from './trips';
import auth from './auth';
import navigation from './navigation'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  trips,
  navigation,
  auth
});

export default rootReducer;