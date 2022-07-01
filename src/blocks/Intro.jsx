import React from "react";
import videoBg from "./videos/intro.mp4";
const Intro = () => {
  return (
    <section className="intro" id="home">
          <video src={videoBg} autoPlay loop muted />
      <h1>
        <img src="./assets/logos/part2.webp" alt="The Last of Us: Part II logo" />
      </h1>
      <p>Personal Non-Comercial project created by Antonio Rosales</p>
      <p>
        The Last of Us: Part II is an adventure thriller with elements of survival
        horror and third-person stealth action, explore the story and watch the
        characters in this ruined world.
      </p>
    </section>
  );
};

export default Intro;
