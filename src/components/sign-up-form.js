import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {registerUser} from '../actions/users';
import Input from './input';
import { formError } from '../actions/auth'
import { display, focusOn } from '../actions/navigation'
import {required, nonEmpty, matches, length, isTrimmed } from './validators';

const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {

    componentDidMount(){
        document.title = 'Register';
    }

    componentWillUnmount(){
        this.props.dispatch(formError(null));
    }

    onSubmit(values) {
        const {password, firstName, lastName, registerUsername} = values;
        const user = { password, firstName, lastName, registerUsername};
        return this.props.dispatch(registerUser(user))
    }

    onClick(focus=""){
        this.props.dispatch(display(focus));
        this.props.dispatch(focusOn(focus));
      }
    
    generateError(){
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        else if(this.props.formError){
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.formError}
                </div>
            );            
        }
    return error;
    }

    render() {
      if (this.props.loggedIn) {
        return <Redirect to="/home" />;
    }
        return (
            <form
                id="register"
                className="registration-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Register</h2>

                {this.generateError()}

                <Field
                    component={Input}
                    type="text"
                    name="registerUsername"
                    validate={[required, nonEmpty, isTrimmed]}
                    label="Username"
                />

                <Field 
                    component={Input} 
                    type="text" 
                    name="firstName" 
                    validate={[required, nonEmpty, isTrimmed]}
                    label="First Name"
                />
                
                <Field 
                    component={Input} 
                    type="text" 
                    name="lastName" 
                    validate={[required, nonEmpty, isTrimmed]}
                    label="Last Name"
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                    label="Password"
                />
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                    label="Confirm Password"
                />
                <button
                    type="submit"
                    className="submit"
                    >
                    Register
                </button>
                <div className="bottom-text">
                    <p>Already Have An Account? 
                        <button
                        type="button"
                        className="link-to-form"
                        onClick={()=>this.onClick('loginUsername')} 
                        > Sign In Here!</button>
                    </p>    
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
  formError: state.auth.formError,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>{
        dispatch(focus('registration', Object.keys(errors)[0]))
    },
})(SignUpForm));