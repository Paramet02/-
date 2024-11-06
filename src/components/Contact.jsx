import React from 'react'
import Line from './line'

function Contact() {
  return (
    <div style={{ fontFamily : "Ubuntu-Light" }} >
      <h2>Contact : </h2>
      <Line />
        <div className='box'>
          <img src="/ig.png" alt="ig" className='img'/><p className='text'>bluethy.22</p>
          <img src="/gmail.png" alt="gmail" className='img'/><p className='text'>paramet.khing@gmail.com</p>
        </div>
        <div className='box'>
          <img src="/GitHub-logo.png" alt="ig" className='img2'/><p className='text'>Paramet02</p>
          <img src="/phone.png" alt="gmail" className='img'/><p className='text'>0955308111</p>
        </div>
    </div>
  )
}

export default Contact