/** @format */

import React, { Component } from "react";

class Content extends Component {
  render() {
    if (Object.keys(this.props.item).length) {
      return (
        <div className="content">
          <iframe
            className="content-video"
            title="Youtube"
            id="player"
            type="text/html"
            width="600"
            height="340"
            src={this.props.url}
            frameBorder="0"
          ></iframe>
          <div className="content-description">
            <div className="content-description-title">
              {this.props.item.snippet.title}
            </div>
            {/* <div className="content-description-channel">
              {this.props.item.snippet.publishedAt
                .replace("T", " ")
                .replace("Z", " ")}
            </div> */}
            <div className="content-description-channel">
              {this.props.item.snippet.channelTitle}
            </div>
            <div className="content-description-text">
              {this.props.item.snippet.description}
            </div>
          </div>
        </div>
      );
    }
    return <></>;
  }
}

export default Content;
