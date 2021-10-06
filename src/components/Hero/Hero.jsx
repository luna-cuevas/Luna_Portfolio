import {React, useRef, useEffect} from 'react'
import './HeroStyle.css'
import cloud1 from '../img/cloud1.svg'
import cloud2 from '../img/cloud2.svg'
import moon from '../img/moon.svg'
import { gsap } from "gsap";

const Hero = () => {
    const heroText = useRef();
    const moonSVG =  useRef();

    useEffect(() => {
        gsap.from(heroText.current, { 			
        scrollTrigger : {
        toggleActions : 'play none restart restart',
        trigger       : '.hero-text'
        },
        opacity       : 0,
        delay         : 1.1,
        z             : 100,
        duration      : 2,
        stagger       : 0.5 });
      });

      useEffect(() => {
        gsap.to(moonSVG.current, {
			scrollTrigger : {
				toggleActions : 'play none restart restart',
				trigger       : '.moon'
			},
			delay    : 3,
			rotation : 360,
			duration : 3,
		});
      })

      

    return (
        <div className='hero'>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 title="Luna Cuevas" className="intro">Luna Cuevas</h1>
                    <div className="hero-p" ref={heroText}>
                        <p>Developer</p>
                        <p>&</p>
                        <p>Designer</p>
                    </div>
                </div>
                <div className="moon">
                    <img className="cloud1" src={cloud1} alt="left cloud svg" />
                    <img className="moon1" src={moon} alt="moon svg" />
                    <img className="cloud2" src={cloud2} alt="right cloud svg" />
                </div>
            </div>
        </div>
    )
}

export default Hero
