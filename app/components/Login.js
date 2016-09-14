import React, {PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

import CenteredContent from './CenteredContent';
import Credits from './Credits';

const style = {
  textField: {
    width: 400,
    fontSize: 14,
    marginRight: 10
  }
};

const TEXT_FIELD_LABEL = 'Solr hosts [Ex: localhost:8983; localhost:8984]';

 class Login extends Component {
  render() {
    return (
      <div className="login" >
        <CenteredContent className="login-component">

          <div className="app-connect" style={{ minWidth: '500px' }}>
            <div style={{
              textAlign: 'center',
              visibility: !this.props.showProgressBar ? 'hidden' : 'visible' }}
            >
              <LinearProgress mode="indeterminate" />
            </div>
            <div style={{ display: this.props.showProgressBar ? 'none' : 'block' }}>
              <TextField
                ref="hostsTextField"
                floatingLabelText={TEXT_FIELD_LABEL}
                defaultValue={this.props.defaultValue}
                style={style.textField}
                onChange={this._updateConnectButtonState}
              />
              <RaisedButton
                className="connect"
                label="Connect"
                disabled={this.props.connectDisable}
                primary
                onClick={this._handleConnectClick}
              />
            </div>
          </div>

        </CenteredContent>
        <Credits />
      </div>
    );
  }
}

Login.propTypes = {
    showProgressBar : PropTypes.bool.isRequired,
    connectDisable : PropTypes.bool.isRequired,
    defaultValue : PropTypes.string.isRequired,
};


export default Login
