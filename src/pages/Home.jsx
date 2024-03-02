import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/Home.scss'

export default function Home() {
  return (
    <div id='home-container' className='home-container'>

        <Navbar/>

        <div className='first-cont'>
        <div className='head'>
                <span className='eco-head'>ECONOMIC</span>
                <span className='analytic-head'>ANALYTICS</span>
            </div>
            <div className='sub-head'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
           
        </div>
          
        <div className='second-box'>
            

        </div>


    </div>
  )
}
