/** @format */

import React, { Component } from "react";
import styles from "./item.module.css";

class Item extends Component {
  onSelect = () => {
    this.props.onSelect(this.props.item);
  };

  render() {
    const { channelTitle, thumbnails, title } = this.props.item.snippet;

    const displayType =
      this.props.display === "list" ? styles.list : styles.grid;

    return (
      <div className={`${styles.container} ${displayType}`}>
        <li className={styles.item} onClick={this.onSelect}>
          <img
            className={styles.thumbnail}
            src={thumbnails.medium.url}
            alt=""
          />
          <div className={styles.description}>
            <span className={styles.title}>{title}</span>
            <br></br>
            <span className={styles.channel}>{channelTitle}</span>
          </div>
        </li>
      </div>
    );
  }
}

export default Item;
