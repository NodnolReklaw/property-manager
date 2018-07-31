import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import SigninForm from './signin-form';

class Signin extends Component {
 
  onSubmit = (fields) => {
    this.props.signIn(fields, () => {
      this.props.histroy.push('/dashboard');
    })
  }
 
  render() {
    return (
      <div className='sign-in'>
        
        <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    );
  }
}

export default connect(null, actions)(Signin);