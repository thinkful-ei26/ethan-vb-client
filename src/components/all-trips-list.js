import React from 'react';

export default class AllTripsList extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchTrips());

  // }

  render () {
    console.log(this.props);
    let tripsList;
    // tripsListOptions = this.props.trips.map
    tripsList = this.props.trips.map((trip, index) => <section key={index}>
    <h3>{trip.user}</h3>
    <ul> <h5>Trip Options</h5>
      <li>{trip.selectedOptions[0]}</li>
    </ul>
    <p>Trip Duration: {trip.duration} days </p>
    </section>);

    return <main>
    {tripsList}
  </main>
  }
}