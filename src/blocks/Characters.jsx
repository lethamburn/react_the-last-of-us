import React from "react";
import BottomNavigator from "../components/BottomNavigator";
import videoBg from "./videos/gallery.mp4";
const Characters = () => {
  return (
    <div className="characters" id="characters">
     <video src={videoBg} autoPlay loop muted />
    <h2>CHARACTERS</h2>
      <div class="gallery_container">
        <div class="card">
          <img src="./assets/images/joel.webp" alt="Joel portrait"/>
          <div class="card__head">Joel</div>
        </div>
        <div class="card">
          <img src="./assets/images/ellie.webp" alt="Ellie portrait" />
          <div class="card__head">Ellie</div>
        </div>
        <div class="card">
          <img src="./assets/images/abby.webp" alt="Abby portrait" />
          <div class="card__head">Abby</div>
        </div>
        <div class="card">
          <img src="./assets/images/dina.webp" alt="Dina portrait" />
          <div class="card__head">Dina</div>
        </div>
        <div class="card">
          <img src="./assets/images/tommy.webp" alt="Joel portrait" />
          <div class="card__head">Tommy</div>
        </div>
      </div>
      <BottomNavigator />
    </div>
  );
};

export default Characters;
