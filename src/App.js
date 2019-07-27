import React, { Component } from "react";
import Projects from "./components/Projects";
import SocialProfiles from "./components/SocialProfiles";
import profile from "./assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello.</h1>
        <p>My name is Elin del Rosario. I'm a full stack developer.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Parañaque City, Philippines.</p>
            <p>I am into web development and currently learning MERN stack.</p>
            <p>Also, I am into photography specifically about film.</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
