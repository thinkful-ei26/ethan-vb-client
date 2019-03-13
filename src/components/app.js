import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import InfoModal from './info-modal';
// import AllTripsList from './all-trips-list';
// import NewTrip from './new-trip';
import Homepage from './homepage';
import SignUpForm from './sign-up-form';
import LoginForm from './login-form';

export class App extends React.Component {
  render(){
    // if (this.props.modal){
    //   return (
    //     <InfoModal />);
    // } else {
      console.log(this.props);
      return (
        <div>
          {/* <Route path="/" component={Navbar} /> */}
          <Route exact path="/" component={InfoModal} />
          <Route exact path="/register" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/home" component={Homepage}></Route>
        </div>
      );
    }
  }



const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));