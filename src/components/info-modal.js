import React from 'react';

import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LogInForm from './login-form';

import './info-modal.css'

import {closeModal} from '../actions/trips';

export class InfoModal extends React.Component{
   
  render (){
    if (this.props.loggedIn){
        return <Redirect to="/dashboard" />
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
                    <li>Have great vacation ideas of your own? Submit a suggestion for other users' requested trips. You can do this without registering for an account</li>
                </ul>
            </section>
            <section>
            <h2>Sign In</h2>
                <LogInForm />
                <Link to="/register">Register</Link>
            </section>
            <button className="close" onClick={() => this.props.dispatch(closeModal())}>Got It!</button>
        </div>
        )
      }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(InfoModal)