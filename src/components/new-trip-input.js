import React from 'react';
// import Multiselect from 'react-widgets/lib/Multiselect';

import './new-trip-input.css'

export default class Input extends React.Component{
  render(){
    // console.log(this.props.children);
    
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
        error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
        warning = <div className="form-warning">{this.props.meta.warning}</div>;
    }

    return(
      <div className="trip-option">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <div className={this.props.type}>
         <Element
            {...this.props.input}
            id={this.props.input.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            ref={input => this.input = input}>
            {this.props.children}
          </Element>
        </div>
      </div>


    )

  }


}