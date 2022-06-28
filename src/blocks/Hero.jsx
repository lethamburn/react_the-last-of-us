import React from "react";
import TopNavigator from "../components/TopNavigator";
import VideoBg from "reactjs-videobg";
import mp4 from "./videos/hero.mp4";
const Hero = () => {
  return (
    <section className="hero">
      <VideoBg autoPlay muted loop>
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>
      <TopNavigator />
      <h5>Experience</h5>
      <p>
        The Last of Us: Part II starts five years after the finale of the first
        part. Growing up, Ellie and Joel live in the town of Jackson, but there
        is a sense of tension between the characters - Even they go on patrols
        separately, soon Ellie decides to leave the settlement and goes in
        search of a group of people who have made her very angry.
      </p>
    </section>
  );
};

export default Hero;
