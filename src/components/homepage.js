import React from 'react';
import {connect} from 'react-redux';
import AllTripsList from './all-trips-list';
import NewTripForm from './new-trip';
import InfoModal from './info-modal';
import SidebarNav from './navbar';

export class Homepage extends React.Component {
  
  display(){
    return this.props.display==="new-trip" ? <NewTripForm/> :
    this.props.display==="all-trips" || this.props.display==="my-trips" ? <AllTripsList/> : 
    this.props.display==="about" ? <InfoModal/> :  
    <AllTripsList />
  }

  render(){
    return(
      <main className="main">
        <SidebarNav />
        {this.display()}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  display: state.navigation.display,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Homepage)