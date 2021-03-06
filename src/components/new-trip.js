import React from 'react';

import {connect} from 'react-redux';
import {Field, reduxForm, reset} from 'redux-form';

import Input from './new-trip-input';
import {addTrip} from '../actions/trips';
import { display } from '../actions/navigation'
import {required, notEmpty} from '../validators';

import './new-trip.css';

export class NewTripForm extends React.Component {

  onSubmit(value) {
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
    const newTrip = {
      name: value.name,
      duration: value.duration,
      selectedOptions: selectedOptions
    }
    this.props.dispatch(addTrip(newTrip));
    this.props.dispatch(reset('NewTrip'));
    this.props.dispatch(display('all-trips'));
  }

  render(){
    console.log(this.props);
    return (
    <div className="form-container">
    <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
      <h1>What are you looking for in your vacation?</h1>
      <fieldset>
      <legend>Select as many as you want</legend>
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
    </fieldset>
    <fieldset className="select-options">
      <legend>Trip Details</legend>
      <Field 
        component={Input}
        element="input"
        label="Give your trip a name" 
        type="text" 
        name="name"
        placeholder="Sunny vacation!"
        validate={[required, notEmpty]} 
      />
      <Field 
        component={Input}
        element="input"
        label="How long is your trip (in days)?" 
        type="number" 
        name="duration" 
        placeholder="9"
        validate={[required, notEmpty]} 
      />
      </fieldset>
      <div className="new-trip-submit">
        <button type="submit">Add your trip!</button>
      </div>
    </form>
    </div>
    )}
}

const mapStateToProps = state => ({
  display: state.navigation.display,
});

export default connect(mapStateToProps)(reduxForm({
  form: 'NewTrip'
})(NewTripForm))