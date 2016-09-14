import React, { Component } from 'react';

class CenteredContent extends Component {
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

export default CenteredContent
