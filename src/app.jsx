/** @format */

import React, { Component } from "react";
import "./app.css";
import Search from "./components/search";
import Lists from "./components/lists";
import Content from "./components/content";

class App extends Component {
  state = {
    result: [],
    item: {},
    url: "",
  };

  componentDidMount() {
    const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA8Ke0jkED3XtMUEaliGABP93RdS_C5A40`;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(baseUrl, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(this.result);
        this.setState({ result: JSON.parse(result).items });
      })
      .catch((error) => console.log("error", error));
  }

  handleSearch = (keyword) => {
    const baseUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${keyword}&key=AIzaSyA8Ke0jkED3XtMUEaliGABP93RdS_C5A40`;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(baseUrl, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        this.setState({ result: JSON.parse(result).items });
      })
      .catch((error) => console.log("error", error));
  };

  handleSelect = (item) => {
    let videoId;

    if (typeof item.id === "object") {
      videoId = item.id.videoId;
    } else {
      videoId = item.id;
    }
    let url = `http://www.youtube.com/embed/${videoId}?enablejsapi=1&amp;origin=http://example.com`;

    this.setState({ item, url });

    console.log(this.state.item);
  };

  render() {
    return (
      <>
        <Search onSearch={this.handleSearch}></Search>
        <div className="view">
          <Content item={this.state.item} url={this.state.url}></Content>
          <Lists onSelect={this.handleSelect} lists={this.state.result}></Lists>
        </div>
      </>
    );
  }
}

export default App;
