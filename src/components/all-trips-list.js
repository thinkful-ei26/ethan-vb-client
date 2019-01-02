import React from 'react';
import {connect} from 'react-redux';
import {fetchTrips} from '../actions/trips';

export class AllTripsList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTrips());

  }

  // componentDidUpdate() {
  //   this.props.dispatch(fetchTrips());
  // }

  render () {
    console.log(this.props);
    let tripsList;
    // tripsListOptions = this.props.trips.map
    tripsList = this.props.trips.map((trip, index) => <section key={index}>
    <h3>{trip.name}</h3>
    <ul> <h5>Trip Options</h5>
      {trip.selectedOptions.map((option, index) => <li key={index}> {option} </li>)}
    </ul>
    <span>Trip Duration: {trip.duration} days </span>
    <span>Where should {trip.name} go?</span>
    </section>);

    return <main>
    {tripsList}
  </main>
  }
}

const mapStateToProps = state => {
  return {
  trips: state.tripsReducer.trips,
  error: state.tripsReducer.error,
  state
  }
}

export default connect(mapStateToProps)(AllTripsList);