import React, { Component } from 'react';

export default class CenteredContentComponent extends Component {
  render() {
    return (
      <div className={`centered-container ${this.props.className}`}>
        <div className="centered">
          {this.props.children || ''}
        </div>
      </div>
    );
  }
}
