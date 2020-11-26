/** @format */

import React, { Component } from "react";

class Item extends Component {
  onSelect = () => {
    this.props.onSelect(this.props.item);
  };

  render() {
    const { channelTitle, thumbnails, title } = this.props.item.snippet;

    return (
      <li className="item" onClick={this.onSelect}>
        <img src={thumbnails.medium.url} alt="" />
        <div className="description">
          <span className="title">{title}</span>
          <br></br>
          <span className="channel">{channelTitle}</span>
        </div>
      </li>
    );
  }
}

export default Item;
