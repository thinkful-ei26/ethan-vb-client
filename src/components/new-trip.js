import React from 'react';

import {Field, reduxForm, reset} from 'redux-form';

import NewTripInput from './new-trip-input';
import { addTrip } from '../actions/trips';

class NewTripForm extends React.Component {

  onSubmit(value) {
    console.log(value);
    const newCheese = value.newCheese;
    this.props.dispatch(addTrip(newCheese));
    this.props.dispatch(reset('NewCheese'));
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
      <button type="submit">Add your cheese</button>
    </form>
    )}
}

export default reduxForm({
  form: 'NewTrip'
})(NewTripForm)