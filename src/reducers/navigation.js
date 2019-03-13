import {
  DISPLAY,
  FOCUS_ON
} from '../actions/navigation';

const INITIAL_STATE = {
  display: 'all-trips',
  focusOn: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY:
      return Object.assign({}, state, {
        display: action.component,
      });   
    case FOCUS_ON:
      return Object.assign({}, state, {
        focusOn: action.focus,
      });     
    default:
      return state;
  }
};