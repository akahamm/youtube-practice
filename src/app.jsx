/** @format */

import React, { Component } from "react";
import "./app.css";
import Search from "./components/search";
import Lists from "./components/lists";
import Content from "./components/content";

class App extends Component {
  state = {
    result: [],
    item: null,
    url: "",
  };

  componentDidMount() {
    this.props.youtube.mostPopular().then((result) => {
      this.setState({ result });
    });
  }

  handleMain = () => {
    // Go to main
    this.props.youtube.mostPopular().then((result) => {
      this.setState({ item: null, url: "", result });
    });
  };

  handleSearch = (query) => {
    this.props.youtube.search(query).then((result) => {
      this.setState({ item: null, url: "", result });
    });
  };

  handleSelect = (item) => {
    let videoId;

    if (typeof item.id === "object") {
      videoId = item.id.videoId;
    } else {
      videoId = item.id;
    }
    let url = `http://www.youtube.com/embed/${videoId}`;

    this.setState({ item, url });

    console.log(this.state.item);
  };

  render() {
    return (
      <>
        <Search onSearch={this.handleSearch} goMain={this.handleMain}></Search>
        <div className="content">
          {this.state.item && (
            <div className="detail">
              <Content item={this.state.item} url={this.state.url}></Content>
            </div>
          )}
          <div className="lists">
            <Lists
              lists={this.state.result}
              onSelect={this.handleSelect}
              display={this.state.item ? "list" : "grid"}
            ></Lists>
          </div>
        </div>
      </>
    );
  }
}

export default App;
