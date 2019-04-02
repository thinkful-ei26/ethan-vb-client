import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';

import Input from './new-trip-input';
import {addSuggestion} from '../actions/trips';
import {required} from '../validators';

class TripSuggestion extends React.Component{
  
  onSubmit(value) {
    const tripId = this.props.form;
    const newSuggestion = {
      suggestion: value,
      id: tripId
    }
    this.props.dispatch(addSuggestion(newSuggestion));
    this.props.dispatch(reset(tripId));
  }
  
  
  render(){
    return (
    <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
      <Field 
            component={Input}
            element="input"
            label="Your suggestion" 
            type="input"
            name="suggestion" 
            validate={required} 
      />
      <button type="submit">Add!</button>
    </form>
    );
  }
}

export default reduxForm({})(TripSuggestion)