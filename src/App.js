import React, { Component } from "react";
import reactLogo from "./logo-react.svg";
import djangoLogo from "./logo-django.svg";
import "./App.css";
import ReactPlayer from "react-player";
class App extends Component {
  render() {
    const url = `https://music.youtube.com/playlist?list=OLAK5uy_nh7C0sRrypmOOxbPmAbpOg7whgQiT9oVk&feature=share`
    return (
      <div className="App">
        <header className="App-header">
          <ReactPlayer controls={true} url={url} loop={true} />
          <img src={reactLogo} className="App-logo" alt="React logo" />
          <img src={djangoLogo} className="App-logo" alt="Django logo" />
          <h1 className="App-title">Welcome to the React-Django app</h1>
        </header>
        <p className="App-intro">
          I'm a blank canvas waiting for a coder's touch!
        </p>
      </div>
    );
  }
}

export default App;
