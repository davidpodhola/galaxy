import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ping from 'node-http-ping';
import { isURL, toInt } from 'validator';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

import CenteredContent from '../components/CenteredContent';
import Credits from '../components/Credits';
// import Login from '../components/Login'

const style = {
  textField: {
    width: 400,
    fontSize: 14,
    marginRight: 10
  }
};

const DEFAULT_HOST = 'localhost:8983';
const TEXT_FIELD_LABEL = 'Solr hosts [Ex: localhost:8983; localhost:8984]';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProgressBar: false,
      hosts: DEFAULT_HOST,
      connectDisable: false,
    };

    this._handleConnectClick = this._handleConnectClick.bind(this);
    this._connect = this._connect.bind(this);
    this._ping = this._ping.bind(this);
    this._updateConnectButtonState = this._updateConnectButtonState.bind(this);
  }

  componentDidMount() {
    this.refs.hostsTextField.focus();
  }

  _handleConnectClick() {

      const state = this.state;

      // state.showProgressBar = true;
      state.hosts = this.refs.hostsTextField.input.value;

      this.setState(state);

      console.log("click");
      this.props.router.push('/home')

      // @fbielejc: this throws exceptions at me, commenting out for now
      // this._connect();
  }

  _connect() {
    const hosts = function* hosts() {
      const _hosts = [{ host: 'localhost', port: '8983' }, { host: 'localhost', port: '32770' }];

      for (const h of _hosts) {
        yield h;
      }
    };

    this._ping(hosts.next());
  }

  _ping({ host: h, port: p }, hosts) {
    ping(h, p)
        .then(() => this.props.router.push('/collections'))
        .catch(error => {
          this._pint(hosts.next());

          console.log(`Failed to ping: ${h}:${p}, error: ${error}`);
        });
  }

  _shouldDisableConnectButton() {
    return (this.refs.hostsTextField.input.value === '');
  }

  _updateConnectButtonState() {
      const state = this.state;
      state.connectDisable = this._shouldDisableConnectButton();
      this.setState(state);
  }

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




export default withRouter(LoginContainer);
