import {API_BASE_URL} from '../config';

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

export const ADD_TRIP_ERROR = 'ADD_TRIP';
export const addTripError = (error) => {
  return {
    type: 'ADD_TRIP',
    error
  }
}

export const ADD_TRIP_SUCCESS = 'ADD_TRIP';
export const addTripSuccess = (data) => {
  return {
    type: 'ADD_TRIP_SUCCESS',
    data
  }
}


export const fetchTrips = () => {
  return(dispatch) => {
    dispatch(fetchTripsRequest());
    console.log(`${API_BASE_URL}/trips`);
    fetch(`${API_BASE_URL}/trips`)
      .then(res => res.json())
      .then(trips => dispatch(fetchTripsSuccess(trips.trips)))
      .catch(err => dispatch(fetchTripsError(err)))
  }
}

export const addTrip = (value) => {
  console.log(value)
  const tripObj = {"name": value};
  return(dispatch) => {
    dispatch(addTripRequest());
    fetch(`${API_BASE_URL}/trips`, 
    {
      method: 'POST',
      body: JSON.stringify(tripObj),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => res.json())
      .then(cheeses => dispatch(fetchTripsSuccess(cheeses.cheeses)))
      .catch(err => dispatch(addTripError(err)))
  }
}