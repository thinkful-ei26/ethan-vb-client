import React from 'react';
import {connect} from 'react-redux';
import AllTripsList from './all-trips-list';
import NewTrip from './new-trip';
import { InfoModal } from './info-modal';

export class Homepage extends React.Component {
  
  display(){
    return this.props.display==="new-trip" ? <NewTrip/> :
    this.props.display==="all-trips" ? <AllTripsList/> : 
    this.props.display==="about" ? <InfoModal/> :  
    <AllTripsList />
  }

  render(){
    return(
      <main className="main">
        {this.display()}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  display: state.nav.display,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Homepage)