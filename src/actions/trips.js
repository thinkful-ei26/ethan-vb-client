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


// export const fetchTrips = () => {
//   return(dispatch) => {
//     dispatch(fetchTripsRequest());
//     console.log(`${API_BASE_URL}/trips`);
//     fetch(`${API_BASE_URL}/trips`)
//       .then(res => {
//         // console.log(res.json());
//         res.json();
//       })
//       .then(trips => {
//         // console.log(trips.body);
//         dispatch(fetchTripsSuccess(trips.trips))
//       })
//       .catch(err => dispatch(fetchTripsError(err)))
//   }
// }

export const fetchTrips = () => {
  return(dispatch) => {
    dispatch(fetchTripsRequest());
    // console.log(`${API_BASE_URL}/trips`);
    fetch(`${API_BASE_URL}/trips`)
      .then(res => res.json())
      .then(trips => dispatch(fetchTripsSuccess(trips)))
      .catch(err => dispatch(fetchTripsError(err)))
  }
}


export const addTrip = (value) => {
  // let selectedOptions = [];
  // if (value.hiking){
  //   selectedOptions.push('Hiking')
  // }
  // if(value.artArchitecture){
  //   selectedOptions.push('Art + Architecture')
  // }
  // if(value.beaches){
  //   selectedOptions.push('Beaches')
  // }
  // if(value.breweries){
  //   selectedOptions.push('Breweries')
  // }
  // if(value.distilleries){
  //   selectedOptions.push('Distilleries')
  // }
  // if(value.fineDining){
  //   selectedOptions.push('Fine Dining')
  // }
  // if(value.gambling){
  //   selectedOptions.push('Gambling')
  // }
  // if(value.liveMusic){
  //   selectedOptions.push('Live Music')
  // }
  // if(value.museums){
  //   selectedOptions.push('Museums')
  // }
  // if(value.partying){
  //   selectedOptions.push('Partying')
  // }
  // if(value.shopping){
  //   selectedOptions.push('Shopping')
  // }
  // if(value.skiingSnowboarding){
  //   selectedOptions.push('Skiing + Snowboarding')
  // }
  // if(value.vineyards){
  //   selectedOptions.push('Vineyards')
  // }
  // if(value.worldHistoricSites){
  //   selectedOptions.push('World Historic Sites')
  // }
  console.log(value);
  // console.log(selectedOptions);
  // const tripObj = {
  //   "name": value.tripName,
  //   "duration": value.duration,
  //   "selectedOptions": selectedOptions
  // };
  // console.log(tripObj);
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
      // .then(trips => dispatch(addTripSuccess(trips)))
      .then(() => dispatch(fetchTrips()))
      // .then(dispatch(fetchTrips()))
      .catch(err => dispatch(addTripError(err)))
  }
}

export const addSuggestion = (value) => {
  // console.log(value)
  // const suggObj = value;
  // console.log(suggObj);
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
      // .then(trips => dispatch(addSuggestionSuccess(trips)))
      .then(() => dispatch(fetchTrips()))
      // .then(dispatch(fetchTrips()))
      .catch(err => dispatch(addTripError(err)))
  }
}