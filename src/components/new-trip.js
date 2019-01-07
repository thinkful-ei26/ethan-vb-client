import React from 'react';

import {Field, reduxForm, reset} from 'redux-form';
// import Multiselect from 'react-widgets/lib/Multiselect';

import Input from './new-trip-input';
import {addTrip} from '../actions/trips';
import {required, notEmpty} from '../validators';

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
    this.props.dispatch(reset('NewTrip'));
  }

  render(){
    console.log(this.props);
    // if (!this.props.modal){
    return (
    <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
      <Field 
            component={Input}
            element="input"
            label="Give your trip a name" 
            type="input" 
            name="name"
            validate={[required, notEmpty]} 
      />
      <h5>What are you looking for in a vacation?</h5>
      <Field 
            component={Input}
            element="input"
            label="Art + Architecture" 
            type="checkbox" 
            name="artArchitecture" 
      />
      <Field 
            component={Input}
            element="input"
            label="World Historic Sites" 
            type="checkbox" 
            name="worldHistoricSites" 
      />
      <Field 
            component={Input}
            element="input"
            label="Museums" 
            type="checkbox" 
            name="museums" 
      />
      <Field 
            component={Input}
            element="input"
            label="Fine Dining" 
            type="checkbox" 
            name="fineDining" 
      />
       <Field 
            component={Input}
            element="input"
            label="Shopping" 
            type="checkbox" 
            name="shopping" 
      />
       <Field 
            component={Input}
            element="input"
            label="Beaches" 
            type="checkbox" 
            name="beaches" 
      />
       <Field 
            component={Input}
            element="input"
            label="Skiing/Snowboarding" 
            type="checkbox" 
            name="skiingSnowboarding" 
      />
      <Field 
            component={Input}
            element="input"
            label="Hiking" 
            type="checkbox" 
            name="hiking" 
      />
       <Field 
            component={Input}
            element="input"
            label="Partying" 
            type="checkbox" 
            name="partying" 
      />
       <Field 
            component={Input}
            element="input"
            label="Live Music" 
            type="checkbox" 
            name="liveMusic" 
      />
     
      <Field 
            component={Input}
            element="input"
            label="Breweries" 
            type="checkbox" 
            name="breweries" 
      />
      <Field 
            component={Input}
            element="input"
            label="Distilleries" 
            type="checkbox" 
            name="distilleries" 
      />
      <Field 
            component={Input}
            element="input"
            label="Vineyards" 
            type="checkbox" 
            name="vineyards" 
      />
      <Field 
            component={Input}
            element="input"
            label="Gambling" 
            type="checkbox" 
            name="gambling" 
      />
      <Field 
          component={Input}
          element="input"
          label="How long is your trip (in days)?" 
          type="number" 
          name="duration" 
          validate={[required, notEmpty]} 
      />
      <button type="submit">Add your trip!</button>
    </form>
    )}
}

export default reduxForm({
  form: 'NewTrip'
})(NewTripForm)