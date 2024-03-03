import React from 'react'
import '../assets/css/Navbar.scss'
import logo from '../assets/images/logo.svg'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent" >
                <div className="container">
                    <div className="custom d-flex log">
                        <img src={logo} className="upr-logo" alt="logo" />
                        {/* <a className="navbar-brand" href="#"> I-Gate</a>#015c92 */}
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon">gvggg</span> */}
                        <img  alt="asd" />
                    </button>
                    <div className="collapse navbar-collapse formt " id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link ff active" aria-current="page" href="/">Homepage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff" href="#why">Financial analytics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff" href="visualization">Data VISUALIZATION</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ff" href="#features">Reports</a>
                            </li>
                            
                            
                        </ul>
                        <div className='loginbut'>
                        {/* <li className="nav-item ii">
                                <a className="nav-link ss"  href="#contact">Register</a>
                            </li> */}
                                <span className='login-btnn'>Login</span>
                                <span className='register-btnn'>Register</span>

                            {/* login */}
                        </div>
                        {/* <form className="d-flex mobileButton ">
                            <div className="signIn">
                                <button id="signin" className='for-white'> Sign In</button>
                            </div>

                            <div className="signOut">
                                <button id="signout" className='for-white'> Sign Out</button>
                            </div>
                        </form> */}
                    </div>

                </div>
            </nav>
    </>
  )
}
