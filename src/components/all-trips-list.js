import React from 'react';
import {connect} from 'react-redux';

import {fetchTrips} from '../actions/trips';
import TripSuggestion from './trip-suggestion';

import './all-trips-list.css';

export class AllTripsList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTrips());
  }

  render () {
    console.log(this.props);
    const tripsList = this.props.trips.map(trip => 
      <section className="trip-object" key={trip.id}>
        <div className="trip-content">
          <div className="trip-options">
            <h3>{trip.name}'s Desired Options are</h3>
            <ul> 
              {trip.selectedOptions.map((option, index) => <li key={index}> {option} </li>)}
            </ul>
          </div>
          <p>Trip Length: <strong>{trip.duration}</strong> days</p>
          <div className="trip-recommendation-container">
            <h4>Where should {trip.name} go?</h4>
            {trip.suggestions.length > 0 &&
            <div className="trip-recommendations">
              <h5>Other VacationBrain users have already recommended:</h5>
              <ul>
                {trip.suggestions.map((option, index) => <li key={index}> {option} </li>)}
              </ul>
            </div>
            }
            <div className="trip-suggestion"><TripSuggestion form={trip.id} /></div>
          </div>
        </div>
      </section>);
    return (
      <main>
        <h1>Trips From Other Users:</h1>
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

export default connect(mapStateToProps)(AllTripsList);