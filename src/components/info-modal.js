import React from 'react';

import {connect} from 'react-redux';

import './info-modal.css'

import {closeModal} from '../actions/trips';

export class InfoModal extends React.Component{
  render (){
      return (
        <div className="overlay">
            <header role="banner"><h1>Welcome to VacationBrain! Here's how it works:</h1></header>
            <section>
                <p><strong>Add a trip</strong></p>
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
            <button className="close" onClick={() => this.props.dispatch(closeModal())}>Got It!</button>
        </div>
        )
      }
}

export default connect()(InfoModal)