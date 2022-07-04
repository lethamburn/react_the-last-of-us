import React from "react";
import BottomNavigator from "../components/BottomNavigator";
import videoBg from "./videos/story.mp4";
const Story = () => {
  return (
    <section className="story" id="story">
      <video src={videoBg} autoPlay loop muted />

      <h2>STORY</h2>
      <div className="story__container">
        <span>
          <p>
            The Last of Us Part II takes place five years after the events of
            the first game and nearly 25 years after the outbreak of the
            Cordyceps brain infection began. Ellie, who is now 19 years old,
            returns as the protagonist whom players assume control of. Joel, in
            his mid-fifties, also returns as a playable character, as does Abby
            Anderson, who functions as the game's dual protagonist.{" "}
          </p>
          <p>
            Joel and Ellie, having settled down in Tommy's settlement, live in
            relative peace within the thriving community. While there, Ellie has
            even managed to form friendships with Dina and Jesse. However, the
            survivors face constant threats from infected and other hostile
            survivors.
          </p>
          <p>
            When a tragic event disrupts the tranquility of her life, a hate
            filled Ellie embarks on a journey to Seattle in a search for
            vengeance to carry out justice. As she hunts down those responsible
            one by one, she is confronted with the traumatizing physical and
            emotional consequences of her actions.
          </p>
        </span>
        <img src="./assets/images/poster.jpg" alt="The Last of Us Part II poster" />
      </div>
      <BottomNavigator />
    </section>
  );
};

export default Story;
