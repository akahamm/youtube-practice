/** @format */

import React, { Component } from "react";
import Item from "./item";
import styles from "./lists.module.css";

class Lists extends Component {
  onSelect = (item) => {
    this.props.onSelect(item);
    // this.props.onSelect(videoId);
  };

  render() {
    return (
      <ul className={styles.items}>
        {this.props.lists.map((item) => (
          <Item
            key={item.etag}
            item={item}
            onSelect={this.onSelect}
            display={this.props.display}
          ></Item>
        ))}
      </ul>
    );
  }
}

export default Lists;
