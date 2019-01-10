import React from 'react';

import {connect} from 'react-redux';

import './info-modal.css'

import {closeModal} from '../actions/trips';

export class InfoModal extends React.Component{
  render (){
    console.log(this.props);
    // if (this.props.modal){
      return (
        <div className="overlay" id="modal">
            <h3>Welcome to VacationBrain! Here's how it works:</h3>
            <section>
                <p>Add a trip:</p>
                <ul>
                    <li>Give your trip a name and tell us what you're looking for in a vacation and how long you're travelling for.</li>
                    <li>Other VacationBrain users will suggest a destination for you!</li>
                </ul>
            </section>
            <section>
                <p>Add a suggestion:</p>
                <ul>
                    <li>Have great vacation ideas of your own? Submit a suggestion for other users' requested trips.</li>
                </ul>
                <button className="close" onClick={() => this.props.dispatch(closeModal())}>Got It!</button>
            </section>
        </div>
        )
      }
    // }
}

// const mapStateToProps = state => {
//   return {
//     modal: state.tripsReducer.modal
//   }
// }

export default connect()(InfoModal)