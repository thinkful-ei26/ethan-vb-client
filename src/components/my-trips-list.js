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
            <h3>For {trip.name}, I'm looking for</h3>
            <ul> 
              {trip.selectedOptions.map((option, index) => <li key={index}> {option} </li>)}
            </ul>
            <p>Trip Length: <strong>{trip.duration}</strong> days</p>
          </div>
          <div className="trip-recommendation-container">
            {trip.suggestions.length > 0 &&
            <div className="trip-recommendations">
              <h4>Already Recommended:</h4>
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
        <h1>My Trips</h1>
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