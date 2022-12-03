import React from 'react'
const Home = () => {
  return (
    <div className='home' id='home'>
      <div class="bowl_circle circel_top_right"></div>
    <div class="bowl_circle circel_bottom_left"></div>

    <div class="bowl-3-lines-circle bowl-li-ci-top-left">
        <div class="line-in line-1"></div>
        <div class="line-in line-2">
            <div class="head-circle-line"></div>
        </div>
        <div class="line-in line-3"></div>
    </div>

    <div class="bowl-3-lines-circle bowl-li-ci-bottom-right">
        <div class="line-in line-1"></div>
        <div class="line-in line-2">
            <div class="head-circle-line"></div>
        </div>
        <div class="line-in line-3"></div>
    </div>

    <div class="empty-circle empty-ci-top"></div>
    <div class="empty-circle empty-ci-bottom"></div>


    <div class="bowl-lines-tech bowl-lines-tech-top">
      <div class="line-tech line-tech-1"></div>
      <div class="line-tech line-tech-2"></div>
      <div class="line-tech line-tech-3"></div>
    </div>
    <div class="bowl-lines-tech bowl-lines-tech-bottom">
      <div class="line-tech line-tech-1"></div>
      <div class="line-tech line-tech-2"></div>
      <div class="line-tech line-tech-3"></div>
    </div>


    <div class="center-content">
      <div class="my-name">
        <span>Ahmed Shtya</span>
      </div>
      <div class="my-work">
        <span>Web Developer </span>
      </div>
      <div class="short-bio">
        <span>my project Toke me</span>
      </div>
      <div class="social">
        
        <a href="https://www.facebook.com/profile.php?id=100008364883535" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/ahmed-abdelrhman-78bb18230/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Shtya" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://wa.me/01019268938" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        
      </div>
      </div>
      <a href="/about">
          <i className="bullets fa-solid fa-angles-down"></i>
        </a>
    </div>
  )
}

export default Home