import React from 'react';

import {Field, reduxForm, reset} from 'redux-form';
// import Multiselect from 'react-widgets/lib/Multiselect';

import NewTripInput from './new-trip-input';
import { addTrip } from '../actions/trips';

class NewTripForm extends React.Component {

  onSubmit(value) {
    console.log(value);
    const newTrip = value.newTrip;
    this.props.dispatch(addTrip(newTrip));
    this.props.dispatch(reset('tripName'));
  }

  render(){
    return (
    <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
      <Field 
            component={NewTripInput}
            element="input"
            label="Give your trip a name (optional)" 
            type="input" 
            name="tripName" 
            // validate={[required, notEmpty, length]} 
      />
      {/* <Field 
            component={NewTripInput}
            element="input"
            label="What do you want to do on your trip?" 
            type="checkbox"
            name="selectedOptions" 
            // validate={[required, notEmpty, length]} 
      >
        <option value="not-delivered">My delivery hasn't arrived</option>
        <option value="wrong-item">The wrong item was delivered</option>
        <option value="missing-part">Part of my order was missing</option>
        <option value="damaged">Some of my order arrived damaged</option>
        <option value="other">Other (give details below)</option>
        </Field>  */}
      <button type="submit">Add your trip!</button>
    </form>
    )}
}

export default reduxForm({
  form: 'NewTrip'
})(NewTripForm)