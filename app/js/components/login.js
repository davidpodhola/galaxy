import React, { Component } from 'react';
import { withRouter } from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

import ping from 'node-http-ping';
import { isURL, toInt } from 'validator';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const DEFAULT_HOST = 'localhost:8983';
const TEXT_FIELD_LABEL = 'Solr hosts [Ex: localhost:8983; localhost:8984]';

const style = {
  textField: {
    width: 400,
    fontSize: 14,
    marginRight: 10
  }
};

class LoginComponent extends Component {
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

    this._connect();
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
      <div className="app-connect" style={{ minWidth: '500px' }}>
        <div style={{
          textAlign: 'center',
          visibility: !this.state.showProgressBar ? 'hidden' : 'visible' }}
        >
          <LinearProgress mode="indeterminate" />
        </div>
        <div style={{ display: this.state.showProgressBar ? 'none' : 'block' }}>
          <TextField
            ref="hostsTextField"
            floatingLabelText={TEXT_FIELD_LABEL}
            defaultValue={this.state.hosts}
            style={style.textField}
            onChange={this._updateConnectButtonState}
          />
          <RaisedButton
            className="connect"
            label="Connect"
            disabled={this.state.connectDisable}
            primary
            onClick={this._handleConnectClick}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginComponent);
