import React, { Component } from 'react';

class Actor extends Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.role}
      </li>
    );
  }
}

export default Actor;
