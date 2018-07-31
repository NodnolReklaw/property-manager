import React, { Component } from 'react';
import SignupForm from './signup-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signup extends Component {
  
  onSubmit = (fields) => {
    this.props.signUp(fields, () => {
      console.log('navigate to dashboard');
      this.props.history.push('/dashboard');
    })
  }
  
  render() {
    return (
      <div className='sign-up'>
        <SignupForm onSubmit={(event) =>this.onSubmit(event)}/>

      </div>
    );
  }
}

export default connect(null, actions)(Signup);