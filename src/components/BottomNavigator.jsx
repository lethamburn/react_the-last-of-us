import React from "react";

const BottomNavigator = () => {
  return (
    <div className="bottom_navigator">
      <nav>
        <ul>
          <li>
            <a href="#home">
              <h3>Home</h3>
            </a>
          </li>
          <li>
            <a href="#story">
              <h3>Story</h3>
            </a>
          </li>
          <li>
            <a href="#characters">
              <h3>Characters</h3>
            </a>
          </li>
          <li>
            <a href="#media">
              <h3>Media</h3>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="bottom_navigator__social">
        <ul>
          <li>
            <img src="./assets/logos/twitter.png" alt="Twitter logo" />
          </li>
          <li>
            <img src="./assets/logos/facebook.png" alt="Facebook logo" />
          </li>
          <li>
            <img src="./assets/logos/linkedin.png" alt="Linkedin logo" />
          </li>
          <li>
            <img src="./assets/logos/github.png" alt="GitHub logo" />
          </li>
          <li>
            <img src="./assets/logos/youtube.png" alt="Youtube logo" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigator;
