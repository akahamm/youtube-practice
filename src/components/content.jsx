/** @format */

import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <>
        <iframe
          className="content-video"
          title="Youtube"
          id="ytplayer"
          type="text/html"
          width="100%"
          height="500px"
          src={this.props.url}
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <div className="content-description">
          <h2>{this.props.item.snippet.title}</h2>
          <h3>{this.props.item.snippet.channelTitle}</h3>
          <pre className="description">
            {this.props.item.snippet.description}
          </pre>
        </div>
      </>
    );
  }
}

export default Content;
