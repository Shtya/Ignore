import React from 'react'
import Setting from './Skills/Skills'
const Nav = () => {
  return (
    <div className="overllol">
      <nav >
      <div className="logo"> <i className="fa-brands fa-stack-overflow"></i> ShTYa</div>
      <ul>
        <li><a href="/home">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/skills">skills</a></li>
        <li><a href="/project">project</a></li>
        <li><a href="contact">contact</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Nav