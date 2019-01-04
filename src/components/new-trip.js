import React from 'react';

import {Field, reduxForm, reset} from 'redux-form';
// import Multiselect from 'react-widgets/lib/Multiselect';

import Input from './new-trip-input';
import { addTrip } from '../actions/trips';

class NewTripForm extends React.Component {

  onSubmit(value) {
    console.log(value);
    // const newTrip = value;
    let selectedOptions = [];
    if (value.hiking){
      selectedOptions.push('Hiking')
    }
    if(value.artArchitecture){
      selectedOptions.push('Art + Architecture')
    }
    if(value.beaches){
      selectedOptions.push('Beaches')
    }
    if(value.breweries){
      selectedOptions.push('Breweries')
    }
    if(value.distilleries){
      selectedOptions.push('Distilleries')
    }
    if(value.fineDining){
      selectedOptions.push('Fine Dining')
    }
    if(value.gambling){
      selectedOptions.push('Gambling')
    }
    if(value.liveMusic){
      selectedOptions.push('Live Music')
    }
    if(value.museums){
      selectedOptions.push('Museums')
    }
    if(value.partying){
      selectedOptions.push('Partying')
    }
    if(value.shopping){
      selectedOptions.push('Shopping')
    }
    if(value.skiingSnowboarding){
      selectedOptions.push('Skiing + Snowboarding')
    }
    if(value.vineyards){
      selectedOptions.push('Vineyards')
    }
    if(value.worldHistoricSites){
      selectedOptions.push('World Historic Sites')
    }
    console.log(this.props);
    const newTrip = {
      name: value.name,
      duration: value.duration,
      selectedOptions: selectedOptions
    }
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
            name="name" 
            // validate={[required, notEmpty, length]} 
      />
      <h5>What are you looking for in a vacation?</h5>
      <Field 
            component={Input}
            element="input"
            label="Art + Architecture" 
            type="checkbox" 
            name="artArchitecture" 
            // validate={[required, notEmpty, length]} 
      />
      <Field 
            component={Input}
            element="input"
            label="World Historic Sites" 
            type="checkbox" 
            name="worldHistoricSites" 
            // validate={[required, notEmpty, length]} 
      />
      <Field 
            component={Input}
            element="input"
            label="Museums" 
            type="checkbox" 
            name="museums" 
            // validate={[required, notEmpty, length]} 
      />
      <Field 
            component={Input}
            element="input"
            label="Fine Dining" 
            type="checkbox" 
            name="fineDining" 
            // validate={[required, notEmpty, length]} 
      />
       <Field 
            component={Input}
            element="input"
            label="Shopping" 
            type="checkbox" 
            name="shopping" 
            // validate={[required, notEmpty, length]} 
      />
       <Field 
            component={Input}
            element="input"
            label="Beaches" 
            type="checkbox" 
            name="beaches" 
            // validate={[required, notEmpty, length]} 
      />
       <Field 
            component={Input}
            element="input"
            label="Skiing/Snowboarding" 
            type="checkbox" 
            name="skiingSnowboarding" 
            // validate={[required, notEmpty, length]} 
      />
      <Field 
            component={Input}
            element="input"
            label="Hiking" 
            type="checkbox" 
            name="hiking" 
            // validate={[required, notEmpty, length]} 
      />
       <Field 
            component={Input}
            element="input"
            label="Partying" 
            type="checkbox" 
            name="partying" 
            // validate={[required, notEmpty, length]} 
      />
       <Field 
            component={Input}
            element="input"
            label="Live Music" 
            type="checkbox" 
            name="liveMusic" 
            // validate={[required, notEmpty, length]} 
      />
     
      <Field 
            component={Input}
            element="input"
            label="Breweries" 
            type="checkbox" 
            name="breweries" 
            // validate={[required, notEmpty, length]} 
      />
      <Field 
            component={Input}
            element="input"
            label="Distilleries" 
            type="checkbox" 
            name="distilleries" 
            // validate={[required, notEmpty, length]} 
      />
      <Field 
            component={Input}
            element="input"
            label="Vineyards" 
            type="checkbox" 
            name="vineyards" 
            // validate={[required, notEmpty, length]} 
      />
      <Field 
            component={Input}
            element="input"
            label="Gambling" 
            type="checkbox" 
            name="gambling" 
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