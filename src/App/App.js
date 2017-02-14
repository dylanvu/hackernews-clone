import React, { Component } from 'react';
import data from '../data.js'
import Search from '../Search/Search.js'
import Table from '../Table/Table.js'
import './App.css';

const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: data,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item =>
      item.objectID !== id
    );

    this.setState({list: updatedList});
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        />
        <Table
          list={list}
          isSearched={isSearched}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
