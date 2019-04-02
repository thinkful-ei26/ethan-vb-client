import React from 'react';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LogInForm from './login-form';
import SignUpForm from './sign-up-form';

import mockup from '../smartmockups_ju066xnd.png';

import './info-modal.css'

export class InfoModal extends React.Component{
   
  render (){
    if (this.props.loggedIn){
        return <Redirect to="/home" />
      }

    return (
        <div className="overlay">
            <section className="parallax"></section>
            <section className="intro">
                <h1>Welcome to VacationBrain</h1>
                <p className="tagline">Find your next great vacation destination!</p>
                <section className="form-section">
                    {this.props.display==="loginUsername" ? <LogInForm /> : this.props.display==="registerUsername" ? <SignUpForm /> : <LogInForm /> }
                </section>
            </section>
            <section className="about">
                <div className="about-description">
                    <h2>Your next trip is right here</h2>
                    <p>Can't figure out where to go on your next trip? Check out VacationBrain. You can easily add a trip and get recommendations from the VacationBrain community. Have a great idea of your own? Recommend it to other users!</p>
                </div>
                <img className="mockup" src={mockup} alt="mockup"/>            
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