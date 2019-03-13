import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_TRIPS_REQUEST = 'FETCH_TRIPS_REQUEST';
export const fetchTripsRequest = () => {
  return {
    type: 'FETCH_TRIPS_REQUEST'
  } 
}

export const FETCH_TRIPS_ERROR = 'FETCH_TRIPS_ERROR';
export const fetchTripsError = (error) => {
  return {
    type: 'FETCH_TRIPS_ERROR',
    error
  } 
}

export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const fetchTripsSuccess = (data) => {
  return {
    type: 'FETCH_TRIPS_SUCCESS', 
    data
  } 
}

export const ADD_TRIP_REQUEST = 'ADD_TRIP_REQUEST';
export const addTripRequest = () => {
  return {
    type: 'ADD_TRIP_REQUEST',  
  }
}

export const ADD_TRIP_ERROR = 'ADD_TRIP_ERROR';
export const addTripError = (error) => {
  return {
    type: 'ADD_TRIP',
    error
  }
}

export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const addTripSuccess = (data) => {
  return {
    type: 'ADD_TRIP_SUCCESS',
    data
  }
}

export const ADD_SUGGESTION_REQUEST = 'ADD_SUGGESTION_REQUEST';
export const addSuggestionRequest = () => {
  return {
    type: 'ADD_SUGGESTION_REQUEST',  
  }
}

export const ADD_SUGGESTION_ERROR = 'ADD_SUGGESTION_ERROR';
export const addSuggestionError = (error) => {
  return {
    type: 'ADD_SUGGESTION_ERROR',
    error
  }
}

export const ADD_SUGGESTION_SUCCESS = 'ADD_SUGGESTION_SUCCESS';
export const addSuggestionSuccess = (data) => {
  return {
    type: 'ADD_SUGGESTION_SUCCESS',
    data
  }
}

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}


// export const fetchTrips = () => {
//   return(dispatch) => {
//     dispatch(fetchTripsRequest());
//     fetch(`${API_BASE_URL}/trips`)
//       .then(res => normalizeResponseErrors(res))
//       .then(res => res.json())
//       .then(trips => dispatch(fetchTripsSuccess(trips)))
//       .catch(err => dispatch(fetchTripsError(err)))
//   }
// }

export const fetchTrips = () => (dispatch, getState) => {
  dispatch(fetchTripsRequest());
  const authToken = getState().auth.authToken;
  console.log(authToken);
  fetch(`${API_BASE_URL}/trips`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    // .then(res => console.log(res))
    .then(res => res.json())
    // .then(trips => console.log(trips))
    .then(trips => dispatch(fetchTripsSuccess(trips)))
    .catch(err => dispatch(fetchTripsError(err)))
}

export const fetchMyTrips = () => (dispatch, getState) => {
    dispatch(fetchTripsRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/trips/my-trips`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(trips => dispatch(fetchTripsSuccess(trips)))
      .catch(err => dispatch(fetchTripsError(err)))
  }


export const addTrip = (value) => {
  return(dispatch) => {
    dispatch(addTripRequest());
    return fetch(`${API_BASE_URL}/trips`, 
    {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => res.json())
      .then(() => dispatch(fetchTrips()))
      .catch(err => dispatch(addTripError(err)))
  }
}

export const addSuggestion = (value) => {
  return(dispatch) => {
    dispatch(addSuggestionRequest());
    return fetch(`${API_BASE_URL}/trips/${value.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify(value.suggestion),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => res.json())
      .then(() => dispatch(fetchTrips()))
      .catch(err => dispatch(addTripError(err)))
  }
}