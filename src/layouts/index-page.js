import React from 'react';

// components for blog layout
import Menu from '../components/menu';
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
        <BlogHeader/>
        <Jumbotron data={data.jumbotronSwitcher}/>
        <Menu menuName="Sub Menu" path={window.location.pathname}/>
        <div className="row">{this.props.children}</div>
      </div>
    )
  }
  componentDidMount(){
    // alert('Компонент отрендерен!');
  }
}