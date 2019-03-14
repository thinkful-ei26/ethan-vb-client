import React from 'react';
import {connect} from 'react-redux';

import {fetchMyTrips} from '../actions/trips';
// import TripSuggestion from './trip-suggestion';

export class MyTripsList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMyTrips());
  }

  render (){
    const tripsList = this.props.trips.map(trip => 
      <section className="trip-object" key={trip.id}>
        <div className="trip-content">
          <div className="trip-options">
            <h3>For {trip.name}, you're looking for</h3>
            <ul> 
              {trip.selectedOptions.map((option, index) => <li key={index}> {option} </li>)}
            </ul>
          </div>
          <p>Trip Length: <strong>{trip.duration}</strong> days</p>
          <div className="trip-recommendation-container">
            {trip.suggestions.length > 0 &&
            <div className="trip-recommendations">
              <h4>Other VacationBrain users have already recommended:</h4>
              <ul>
                {trip.suggestions.map(suggestion => <li key={suggestion.id}> {suggestion.suggestion} </li>)}
              </ul>
            </div>
            }
          </div>
        </div>
      </section>);
    return (
      <main>
        <h1>Your Trips:</h1>
        <div className="all-trips-container">
          {tripsList}
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips.trips,
    state,
  }
}

export default connect(mapStateToProps)(MyTripsList);