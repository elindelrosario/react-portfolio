import React, { Component } from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";
import SocialProfile from "./SocialProfile";

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        <div>
          {SOCIAL_PROFILES.map((social, index) => {
            return <SocialProfile key={index} social={social} />;
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
