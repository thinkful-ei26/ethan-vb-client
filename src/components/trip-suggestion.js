import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
// import {connect} from 'react-redux'

import Input from './new-trip-input';
import {addSuggestion} from '../actions/trips';
import {required} from '../validators';

class TripSuggestion extends React.Component{
  
  onSubmit(value) {
    console.log(value);
    console.log(this.props.form);
    const tripId = this.props.form;
    const newSuggestion = {
      suggestion: value,
      id: tripId
    }
    this.props.dispatch(addSuggestion(newSuggestion));
    this.props.dispatch(reset(tripId));
  }
  
  
  render(){
    console.log(this.props);
    return (
    <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
      <Field 
            component={Input}
            element="input"
            label="Your suggestion:" 
            type="input"
            name="suggestion" 
            validate={required} 
      />
      <button type="submit">Add!</button>
    </form>
    );
  }
}

export default reduxForm({
  // form: 'Suggestion'
})(TripSuggestion)