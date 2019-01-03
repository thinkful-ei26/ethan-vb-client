import React from 'react';

import {Field, reduxForm, reset} from 'redux-form';
// import Multiselect from 'react-widgets/lib/Multiselect';

import Input from './new-trip-input';
import { addTrip } from '../actions/trips';

class NewTripForm extends React.Component {

  onSubmit(value) {
    console.log(value);
    const newTrip = value;
    console.log(this.props);
    this.props.dispatch(addTrip(newTrip));
      // .then(this.props.dispatch(fetchTrips()));
    // this.props.dispatch(fetchTrips());
    this.props.dispatch(reset('NewTrip'));
    // this.props.dispatch(reset('duration'));
  }

  render(){
    return (
    <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
      <Field 
            component={Input}
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
        <Field 
            component={Input}
            element="input"
            label="How long is your trip (in days)?" 
            type="number" 
            name="duration" 
            // validate={[required, notEmpty, length]} 
      />
      <button type="submit">Add your trip!</button>
    </form>
    )}
}

export default reduxForm({
  form: 'NewTrip'
})(NewTripForm)