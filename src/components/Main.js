import React from 'react';
import Menu from './Menu';
import MentorList from './MentorList';
import FilterTerm from './FilterTerm';

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value,
    });
  }

  render(){
    return(
      <div>
        <Menu
          filterVal={this.state.filterText}
          filterUpdate={e => this.filterUpdate(e)}
        />
        <FilterTerm
          filterVal={this.state.filterText}
          filterUpdate={e => this.filterUpdate(e)}
        />
        <MentorList
          data={this.props.data}
          filter={this.state.filterText}
        />
      </div>
    );
  }
}

export default Main;
