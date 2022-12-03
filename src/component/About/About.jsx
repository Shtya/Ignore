import React from 'react'

const About = () => {
  return (

      <div className="about" id='about'>
        <div className="cover">
          <img src="3.webp" alt="" />
        </div>
        <div className="content">
          Hey, I'm
          <br />
          <span>Ahmed ShTya </span>
          <br />
          <h3>I Build Thing For The Web</h3>
          I’m a front end web developer focused on building the Frontend of
          Websites and Web Applications that leads to the success of the overall
          product and business.
        </div>
        <a href="/about">
          <i className="bullets fa-solid fa-angles-down"></i>
        </a>
      </div>
  )
}

export default About