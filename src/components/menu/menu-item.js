import React from 'react';

export default class MenuItem extends React.Component{
  render(){
    return(
      <li>
        <a href={this.props.data.link}>{this.props.data.title}</a>
      </li>
    );
  }
}