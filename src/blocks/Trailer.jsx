import React from 'react'
import BottomNavigator from '../components/BottomNavigator'
import videoBg from "./videos/trailer.mp4";
const Trailer = () => {
  return (
    <section className="trailer" id="trailer">
    <h2>TRAILER</h2>
    <div className="trailer__container">
    <video src={videoBg} controls loop />
    </div>
    <BottomNavigator/>
  </section>
  )
}

export default Trailer