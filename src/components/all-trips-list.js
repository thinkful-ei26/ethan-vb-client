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
    const tripsList = this.props.trips.map(trip => 
      <section key={trip.id}>
        <div className="trip-content">
          <h3>{trip.name}</h3>
          <div className="trip-options">
            <h5>Trip Options</h5>
            <ul> 
              {trip.selectedOptions.map((option, index) => <li key={index}> {option} </li>)}
            </ul>
          </div>
          <p>Trip Length: <strong>{trip.duration}</strong> days</p>
          
          {trip.suggestions.length > 0 &&
          <div className="trip-recommendations">
            <h5>Other VacationBrain users have already recommended:</h5>
            <ul>
              {trip.suggestions.map((option, index) => <li key={index}> {option} </li>)}
            </ul>
          </div>
          }
          <p>Where should {trip.name} go?</p>
          <div className="trip-suggestion"><TripSuggestion form={trip.id} /></div>
        </div>
      </section>);
    return (
      <main>
        {tripsList}
      </main>
    )
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