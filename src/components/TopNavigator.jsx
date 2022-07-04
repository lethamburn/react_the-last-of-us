import React from "react";

const TopNavigator = () => {
  return (
    <nav className="top_nav">
      <ul>
        <li>
          <a
            href="https://www.naughtydog.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/logos/naughty_dog.png" alt="Naughty Dog Logo" />
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.es/The-Last-of-Us-2/dp/B01N6IVNU6/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2YVZUBCEGOKLP&keywords=the+last+of+us+2&qid=1656919289&sprefix=the+last+of+us+2%2Caps%2C85&sr=8-1"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Buy now</h3>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigator;
