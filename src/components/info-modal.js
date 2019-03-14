import React from 'react';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LogInForm from './login-form';
import SignUpForm from './sign-up-form';

import './info-modal.css'

export class InfoModal extends React.Component{
   
  render (){
    if (this.props.loggedIn){
        return <Redirect to="/home" />
      }

    return (
        <div className="overlay">
            <header role="banner"><h1>Welcome to VacationBrain! Here's how it works:</h1></header>
            <section>
                <p><strong>Create an account to add a trip</strong></p>
                <ul>
                    <li>Give your trip a name and tell us what you're looking for in a vacation and how long you're travelling for.</li>
                    <li>Other VacationBrain users will suggest a destination for you!</li>
                </ul>
            </section>
            <section>
                <p><strong>Add a suggestion</strong></p>
                <ul>
                    <li>Have great vacation ideas of your own? Submit a suggestion for other users' requested trips.</li>
                </ul>
            </section>
            <section>
            <section className="form-section">
                    {this.props.display==="loginUsername" ? <LogInForm /> : this.props.display==="registerUsername" ? <SignUpForm /> : <LogInForm /> }
                </section>
            </section>
        </div>
        )
      }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    display: state.navigation.display,
});

export default connect(mapStateToProps)(InfoModal)