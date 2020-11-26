/** @format */

import React, { Component } from "react";
import Item from "./item";

class Lists extends Component {
  onSelect = (item) => {
    this.props.onSelect(item);
    // this.props.onSelect(videoId);
  };

  render() {
    return (
      <ul className="items">
        {this.props.lists.map((item) => (
          <Item key={item.etag} item={item} onSelect={this.onSelect}></Item>
        ))}
      </ul>
    );
  }
}

export default Lists;
