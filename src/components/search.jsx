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

  goMain = () => {
    this.props.goMain();
  };

  render() {
    return (
      <nav className="header">
        <button className="logo" onClick={this.goMain}>
          <img className="image" src="/images/logo.png" alt="" />
          <h1 className="title">Youtube</h1>
        </button>
        <input
          className="input"
          ref={this.refSearch}
          type="text"
          placeholder="Type anything"
          onKeyPress={this.onKeyPress}
        />
        <button className="search" onClick={this.onSearch}>
          <img className="searchImg" src="/images/search.png" alt="" />
        </button>
      </nav>
    );
  }
}

export default Search;
