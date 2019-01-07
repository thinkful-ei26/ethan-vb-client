import React from 'react';
import {connect} from 'react-redux';

import {fetchTrips} from '../actions/trips';
import TripSuggestion from './trip-suggestion';

import './all-trips-list.css';

export class AllTripsList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTrips());
  }

  // componentDidUpdate() {
  //   this.props.dispatch(fetchTrips());
  // }

  render () {
    console.log(this.props);
    // let tripsSuggested;
    // if (this.props.trips.trip.suggestions.length){
    //   tripsSuggested = 
    //     <span>Other VacationBrain users have already recommended:
    //     <ul>
    //     {this.props.trips.trip.suggestions.map((option, index) => <li key={index}> {option} </li>)}
    //     </ul>
    //   </span>
    // }
    // let tripsList;
    // tripsListOptions = this.props.trips.map
    const tripsList = this.props.trips.map(trip => <section key={trip.id}>
      <h3>{trip.name}</h3>
      <ul> 
        <h5>Trip Options</h5>
        {trip.selectedOptions.map((option, index) => <li key={index}> {option} </li>)}
      </ul>
      <p>Trip Duration: {trip.duration} days</p>
      <p>Where should {trip.name} go?</p>
      <TripSuggestion form={trip.id} />
      {trip.suggestions.length > 0 &&
      <p>Other VacationBrain users have already recommended:
        <ul>
        {trip.suggestions.map((option, index) => <li key={index}> {option} </li>)}
        </ul>
      </p>
      }
    </section>);
    if(!this.props.modal){
      return (
        <main>
          {tripsList}
        </main>
      )
    } else return null
  }
}

const mapStateToProps = state => {
  return {
    trips: state.tripsReducer.trips,
    error: state.tripsReducer.error,
    modal: state.tripsReducer.modal,
    state,
  }
}

export default connect(mapStateToProps)(AllTripsList);