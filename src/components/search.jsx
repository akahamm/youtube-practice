/** @format */

import React, { Component } from "react";

class Search extends Component {
  refSearch = React.createRef();

  onSearch = () => {
    this.props.onSearch(this.refSearch.current.value);
    this.refSearch.current.value = ``;
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onSearch();
    }
  };

  render() {
    return (
      <nav className="navbar">
        <button className="logo">
          <img className="logo-image" src="/images/logo.png" alt="" />
          <span className="logo-text">Hamm tube</span>
        </button>
        <input
          className="input"
          ref={this.refSearch}
          type="text"
          placeholder="Type anything"
          onKeyPress={this.onKeyPress}
        />
        <button className="search" onClick={this.onSearch}>
          <img className="search-image" src="/images/search.png" alt="" />
        </button>
      </nav>
    );
  }
}

export default Search;
