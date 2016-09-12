import React, { Component } from 'react';

import CenteredContentComponent from '../components/centeredContent';
import LoginComponent from '../components/login';
import CreditsComponent from '../components/credits';


export default class LoginContainer extends Component {
  render() {
    return (
      <div className="login" >
        <CenteredContentComponent className="login-component">
          <LoginComponent refs="login" {...this.props} />
        </CenteredContentComponent>
        <CreditsComponent />
      </div>
    );
  }
}
