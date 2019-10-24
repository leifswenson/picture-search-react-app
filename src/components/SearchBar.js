import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Search</label>
          <input type='text' />
        </form>
      </div>
    );
  }
}

export default SearchBar;
