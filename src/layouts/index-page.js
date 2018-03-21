import React from 'react';

// components for blog layout
import Menu from '../components/menu/menu';
import Hello from '../components/pages/hello';

//data
import data from '../data/data';

export default class Blog extends React.Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <div className="container">
        <Menu/>

      </div>
    )
  }
  componentDidMount(){
    // alert('Компонент отрендерен!');
  }
}