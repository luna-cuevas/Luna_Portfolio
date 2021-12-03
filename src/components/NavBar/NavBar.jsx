import React, { useState, useCallback, useEffect } from 'react'
import './NavStyle.css'
import { HamburgerEmphatic } from 'react-animated-burgers'
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';



const NavBar = () => {
    /* this sets the status of the button, 
    if active then it sets the id in mobile overlay as 'not' and if inactive, 
    id is set as 'hidden' */
    const [isActive, setIsActive] = useState(false)
    const toggleButton = useCallback(
      () => setIsActive(prevState => !prevState),
      [],
    )

    return (
        <div id="top" className="Nav">
            <div className="mobile-overlay">
                {/* I'm using Hashlinks to leverage smooth scrolling functionality initialized by "smooth  to" */}
                <div id={isActive ? 'hidden' : 'not'}>
                    <Link className='special-a-tag' to="/">Home</Link>
                    <HashLink className='special-a-tag' smooth to="#info">About</HashLink>
                    <HashLink className='special-a-tag' smooth to="#projects">Projects</HashLink>
                    <HashLink className='special-a-tag' smooth to="#contact">Contact</HashLink>
                </div>
            </div>
            {/* Both mobile and pc overlays are the same but the mobile overlay has special css styling not attributable to pc */}
            <div className="pc-overlay">
                <div className='pages'>
                    <Link className='special-a-tag' to="/">Home</Link>
                    <HashLink className='special-a-tag' smooth to="#info">About</HashLink>
                    <HashLink className='special-a-tag' smooth to="#projects">Projects</HashLink>
                    <HashLink className='special-a-tag' smooth to="#contact">Contact</HashLink>
                </div>
            </div>
            {/* Utilizing a hamburger menu library to give the menu more animation*/}
            <HamburgerEmphatic barColor="white" isActive={isActive} toggleButton={toggleButton} />
        </div>
    )
}

export default NavBar
