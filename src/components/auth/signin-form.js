import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in__form'>
                    <FormTitle className='sign-in-form__title' text='Login'/>
                    <Field className='sign-in-form__email' placeholder='Enter Email' title='Email' component={FormInput} name='email' type='email'/>
                    <Field className='sign-in-form__password' placeholder='Enter Password' title='Password' component={FormInput} name='password' type='password'/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'Signin'
})(SigninForm);

export default SigninForm;