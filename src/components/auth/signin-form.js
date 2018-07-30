import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                    <FormTitle className='sign-in-form__title' text='Login'/>
                    <Field className='sign-in-form__email' placeholder='Enter Email' title='Email' component={FormInput} name='email' type='email'/>
                    <Field className='sign-in-form__password' placeholder='Enter Password' title='Password' component={FormInput} name='password' type='password'/>
                    <Field className='sign-in-form__login'  title='Submit' component={FormButton} name='login' type='button'/>
                    <div className='sign-in-form__text-links'>
                    <TextLink to='/forgot' text='Forgot Password'></TextLink>
                    <TextLink to='/signup' text='Not a member? Register here'></TextLink>
                    </div>
            </form>
            
        )
    }
}

SigninForm = reduxForm({
    form: 'Signin'
})(SigninForm);

export default SigninForm;