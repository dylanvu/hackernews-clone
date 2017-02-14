import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <input
          type="text"
          onChange={onChange}
          value={value}
        />
      </form>
    );
  }
}

export default Search;