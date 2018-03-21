import React from 'react';

export default class MenuItem extends React.Component {
  render() {
    return (
      <a href={this.props.data.link}>
        <li>
          {this.props.data.title}
        </li>
      </a>
    );
  }
}