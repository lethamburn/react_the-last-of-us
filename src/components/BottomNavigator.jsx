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
            <h3>Story</h3>
          </li>
          <li>
            <h3>Characters</h3>
          </li>
          <li>
            <h3>Media</h3>
          </li>
        </ul>
      </nav>
      <nav>
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
