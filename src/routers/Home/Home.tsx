import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home' id='home'>
      <div className="home__container">
        <h1 className="home__title">
          <b>Asranov</b>
          <span style={{ fontWeight: 500, color: "#000" }}> Bakhtnur</span>
          <br />
          <span className="home__desc" >
            <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&pause=1000&color=FFFFFF&width=435&lines=Software+Engineer" alt="Typing SVG" />
          </span>
          <br />
        </h1>
      </div>
    </div >
  )
}

export default Home