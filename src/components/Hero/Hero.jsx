import {React, useRef, useEffect} from 'react'
import './HeroStyle.css'
import Button from '../Button/Button'
import { gsap } from "gsap";
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin'
import Resume from '../misc./luna-cuevas-resume.pdf'
import moon from '../img/moon.svg'
gsap.registerPlugin(MotionPathPlugin);

const Hero = () => {
    const moonRef = useRef();

    // GSAP gradient sphere follows the path #ellipse
    useEffect(() => {
        gsap.to(moonRef.current, {
            motionPath: {
                path: "#ellipse",
                align: "#ellipse",
                alignOrigin: [0.5, 0.5],
                // auto rotate allows the sphere to seemingly face the same direction
                autoRotate: true,
                start: 2,        
            },
            // setting repeat to -1 creates an infinite loop
            repeat: -1,
            ease: 'none',
            duration: 20,
        });
    }) 

    return (
        <div className='hero'>
            <img id='moon' src={moon} alt="Moon SVG icon" />
            <div className="hero-content">
                <div className="hero-text">
                    {/* SVG orbital moon graphics powered by GSAP */}
                    <svg className='ellipse-container' viewBox="-213 10 812 190">
                        {/* this sets the gradient fill on the sphere, check CSS for more info */}
                        <linearGradient id="lg">
                            <stop id="color1" offset="0" />
                            <stop id="color2" offset="1" />
                        </linearGradient>
                        <path id='ellipse' x="0px" y="0px" d="M103.3,56.9c25.4-4.4,54.4-7.3,85.3-8.2c100.6-3,182.7,16.3,183.5,43.1c0.8,26.8-80.1,50.9-180.6,53.9
	                        C90.9,148.7,8.7,129.4,8,102.6c-0.6-18.5,38-35.8,95.2-45.7"/>
                        <circle fill="url(#lg)" id='realmoon'  ref={moonRef}  cx="184.2" cy="36.1" r="12.9" x="0px" y="0px"/>
                    </svg>
                    <div className='intro'>
                        <h1  title="Luna Cuevas">Luna Cuevas</h1>
                        <div className='social'>
                            <a target='_blank' href="https://www.instagram.com/redi8/?hl=en"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                            <a target='_blank' href="https://www.linkedin.com/in/luna-cuevas/"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                            <a target='_blank' href="https://github.com/luna-cuevas"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg></a>    
                        </div>
                    </div>
                    <div  className="hero-p">
                        {/* I added a gradient background on some of the techs to highlight/emphasize */}
                        <p>I am a front end developer with a background in graphic design. I love to build dynamic mobile-responsive websites using  <span className='language'>HTML</span> <span className='language'>CSS/SCSS</span>,<span className='language'>Javascript</span>, and <span className='language'>React</span>.</p>
                        <p>Creating particles, parallax designs and scroll triggered animations using libraries like <span className='language'>GSAP</span> and <span className='language'>threejs</span> is my forte.</p>
                        <div className='button'>
                            <Button targetTo={ '_self' } link={ '#projects' } text={ 'Projects' } />
                            <Button link='https://docs.google.com/document/d/1hte0znHbBU6Q0-iv1nGLWFGsl9Ti2tj5/edit?usp=sharing&ouid=102956530355571931970&rtpof=true&sd=true'  text={ 'Resume' } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
