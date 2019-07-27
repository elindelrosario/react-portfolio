import React, { Component } from "react";

class SocialProfile extends Component {
  render() {
    const { image, link } = this.props.social;
    return (
      <span style={{ margin: 10 }}>
        <a href={link}>
          <img src={image} alt="social" style={{ width: 35, height: 35 }} />
        </a>
      </span>
    );
  }
}

export default SocialProfile;
