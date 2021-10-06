import {React, useRef, useEffect} from 'react';
import upbutton from '../img/upbutton.svg';
import './ToTopButtonStyle.css';
import { HashLink } from 'react-router-hash-link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ToTopButton = () => {

    const svg = useRef(null);

    useEffect(() => {
        gsap.from('#trigger', { 			
        scrollTrigger : {
            trigger       : '.lorem',
            toggleActions : 'play resume none reset',
        },
        delay: 0,
        opacity: 0,
        y: 200,
        duration : 1,
        });
    })
    return (
        <div ref={svg} className='svg'>
            <HashLink smooth to='#top'><img id='trigger' src={upbutton} alt="to top button" /></HashLink>
        </div>
    )
}

export default ToTopButton
