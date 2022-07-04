import React from "react";
import BottomNavigator from "../components/BottomNavigator";

const Media = () => {
  return (
    <section className="media" id="media">
      <div className="gallery">
        <div className="gallery__column">
          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/1.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>

          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/2.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>

          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/3.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>
        </div>

        <div className="gallery__column">
        <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/4.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>

          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/5.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>

          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/6.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>
        </div>

        <div className="gallery__column">
        <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/7.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>
          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/8.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>
          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/9.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>
        </div>

        <div className="gallery__column">
        <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/10.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>

          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/11.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>

          <a
            href=""
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src="./assets/images/12.jpeg"
                alt="Concept 1"
                className="gallery__image"
              />
        
            </figure>
          </a>
        </div>
      </div>
      <BottomNavigator />
    </section>
  );
};

export default Media;
