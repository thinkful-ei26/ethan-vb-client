import React from 'react';
import {connect} from 'react-redux';

import InfoModal from './info-modal';
import AllTripsList from './all-trips-list';
import NewTrip from './new-trip';

export class App extends React.Component {
  render(){
    console.log(this.props);
    if (this.props.modal){
      return (
      // <div className="background-container"></div>
      //   <div><InfoModal /></div>
        <InfoModal />);
    } else {
      return (
        <div>
          <NewTrip />
          <AllTripsList />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    modal: state.tripsReducer.modal
  }
}

export default connect(mapStateToProps)(App);
