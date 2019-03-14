import React from 'react';
import {connect} from 'react-redux';
import AllTripsList from './all-trips-list';
import MyTripsList from './my-trips-list'
import NewTripForm from './new-trip';
import InfoModal from './info-modal';
import SidebarNav from './navbar';
import './homepage.css'

export class Homepage extends React.Component {
  
  display(){
    return this.props.display==="new-trip" ? <NewTripForm/> :
    this.props.display==="all-trips" ? <AllTripsList/> : 
    this.props.display==="my-trips" ? <MyTripsList /> : 
    this.props.display==="about" ? <InfoModal/> :  
    <AllTripsList />
  }

  render(){
    return(
      <div className="all-container">
         <SidebarNav />
        <main className="main">
          {this.display()}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  display: state.navigation.display,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Homepage)