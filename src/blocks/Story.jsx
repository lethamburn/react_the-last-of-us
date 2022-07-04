import React from "react";
import BottomNavigator from "../components/BottomNavigator";
import TopNavigator from "../components/TopNavigator";
import videoBg from "./videos/hero.mp4";
const Story = () => {
  return (
    <section className="story" id="story">
      <video src={videoBg} autoPlay loop muted />
      <TopNavigator />
    
    <img src="./assets/logos/part2.webp" alt="The Last of Us Part II logo" className="hero__logo"/>
      <p>After the events of the first game, Joel Miller (Troy Baker) confesses to his brother Tommy (Jeffrey Pierce) his responsibility in preventing the Fireflies attempting to find a cure for the Cordyceps fungus pandemic by saving Ellie (Ashley Johnson) from an operation that would have killed her. Four years later, Joel and Ellie have built a life in Jackson, Wyoming, though their relationship has become strained. While on patrol, Joel and Tommy rescue a stranger, Abby Anderson (Laura Bailey), from an Infected horde. They return to an outpost run by Abby's group, former Fireflies now part of the Washington Liberation Front (WLF), a militia group based in Seattle, Washington.</p>
      <h3>Official trailer ►</h3>
      <BottomNavigator />
    </section>
  );
};

export default Story;