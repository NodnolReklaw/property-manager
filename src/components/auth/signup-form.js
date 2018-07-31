import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SignupForm extends Component {
    render() {

const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-up-form'>
                    <FormTitle className='sign-up-form__title' text='New User'/>
                    <Field className='sign-up-form__fullname' placeholder='Enter You Full Name ' title='Full Name' component={FormInput} name='fullname' type='fullname'/>
                    <Field className='sign-up-form__unit' placeholder='Enter Unit #' title='Unit #' component={FormInput} name='unit' type='unit'/>
                    <Field className='sign-up-form__email' placeholder='Enter Email' title='Email' component={FormInput} name='email' type='email'/>
                    <Field className='sign-up-form__password' placeholder='Enter Password' title='Password' component={FormInput} name='password' type='password'/>
                    <Field className='sign-up-form__create-account'  title='Create Account' component={FormButton} name='createaccount' type='button'/>
                    <div className='sign-up-form__text-links'>
                    <TextLink to='/signin' text='Already Registered? Login'></TextLink>
                    </div>
            </form>
            
        )
    }
}

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm);

export default SignupForm;