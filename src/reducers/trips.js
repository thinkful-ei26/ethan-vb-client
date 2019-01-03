import {FETCH_TRIPS_REQUEST, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR, ADD_TRIP_ERROR, ADD_TRIP_REQUEST, ADD_TRIP_SUCCESS, ADD_SUGGESTION_REQUEST, ADD_SUGGESTION_ERROR, ADD_SUGGESTION_SUCCESS} from '../actions/trips';

const initialState = {
  trips: [],
  loading: false,
  error: null
};

export const tripsReducer = (state=initialState, action) => {
  if (action.type === FETCH_TRIPS_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_TRIPS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_TRIPS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      trips: action.data
    })
  } else if (action.type === ADD_TRIP_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === ADD_TRIP_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === ADD_TRIP_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      trips: action.data
    })
  } else if (action.type === ADD_SUGGESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === ADD_SUGGESTION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === ADD_SUGGESTION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      trips: action.data
    })
  }
  return state
}