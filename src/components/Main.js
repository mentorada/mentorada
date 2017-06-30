import React from 'react';
import Menu from './Menu';
import MentorList from './MentorList';

class Main extends React.Component{
  render(){
    return(
      <div>
        <Menu />
        <MentorList data={this.props.data} />
      </div>
    );
  }
}

export default Main;
