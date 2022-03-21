import React from 'react'
import Navbar from './Navbar'

 function Header() {
  return (
    <div id="main">
        <Navbar />
        <div className="name">
          <h1>Launch Your App<span>With Confidence And Creativity</span></h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Porro officia dolorum similique
             nobis cumque at nulla ullam corporis maxime. 
             Eos tenetur magni quas aliquam rerum qui 
             reiciendis natus at vel.
            </p>
            <a href="#" className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header;