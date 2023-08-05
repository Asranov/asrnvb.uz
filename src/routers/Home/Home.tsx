import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home' id='home'>
      <div className="home__container">
        <h1 className="home__title">
          <b>Asranov</b>
          <span style={{ fontWeight: 500 }}> Bakhtnur</span>
          <br />
          <span className="home__desc" style={{ fontSize: '1.5rem' }}>
            Software Engineer
          </span>
          <br />
        </h1>
      </div>
    </div>
  )
}

export default Home