import React from 'react'
import './AboutStyle.css'
import react  from '../img/react.svg'
import javascript from '../img/javascript.svg'
import html5 from '../img/html5.svg'
import css3 from '../img/css.svg'
import sass from '../img/sass.svg'
import bootstrap from '../img/bootstrap.svg'
import node from '../img/nodejs.svg'
import github from '../img/github.svg'
import photoshop from '../img/photoshop.svg'
import illustrator from '../img/illustrator.svg'
import mongo from '../img/mongoDB.svg'
import material from '../img/material.svg'
import php from '../img/php.svg'
import magento from '../img/magento.png'
import wordpress from '../img/wordpress.png'
import Gsap from '../img/gsap.svg'
import figma from '../img/figma.png'
import shopify from '../img/shopify.svg'
import threejs from '../img/threejs.svg'
import jest from '../img/jest-icon.svg'
import sanity from '../img/sanity-seeklogo.com.svg'
import graphql from '../img/graphql.svg'
import stripe from '../img/stripe-4.svg'

const About = () => {
    return (
        <div className='info' id='info'>
            <h1 className="title">About Me</h1>
            <div className='blurb gradient-border'>
                <div className='about-container'>
                    <div className='lorem'>
                        <p>Hello! Thanks for taking a moment to check out my website!</p>
                        <p>I'm a self-taught full stack developer primarily specializing in JAM Stack technologies and animation libraries like GSAP and three.js</p>
                        <p>In the past year, I've found success as a freelance web developer working with e-commerce clients and content creators. I draft, design, and build beautiful mobile-responsive web pages with image optimization and cross browser compatibility. Clients often prefer Wordpress but I'm agile in can work with any of the major headless and traditional CMS's to ensure future updates can be done by the user.</p>
                        <p>My goal is to find a group of talented engineers and help tackle modern problems with creative solutions. Thanks again for taking time to read through this, if you feel like we can work together please feel free to reach out below and I'll get back to you ASAP!</p>
                    </div>
                </div>
                <div className='skills'>
                    <h2 className='skills-title'>Skills</h2>
                    <div className='icons'>
                        <p>React<img src={react} alt="react icon" /></p>
                        <p>JavaScript<img src={javascript} alt="Javascript icon" /></p>
                        <p>HTML5<img src={html5} alt="HTML5 icon" /></p> 
                        <p>CSS3<img src={css3} alt="CSS icon" /></p>
                        <p>Sass<img src={sass} alt="Sass icon" /></p>
                        <p>Bootstrap<img src={bootstrap} alt="Bootstrap icon" /></p>
                        <p>GSAP<img src={Gsap} alt="gsap icon" /></p>
                        <p>Node.js<img src={node} alt="Node icon" /></p>
                        <p>MongoDB<img src={mongo} alt="MongoDB Icon" /></p>
                        <p>GitHub<img src={github} alt="Github icon" /></p>
                        <p>Photoshop<img src={photoshop} alt="Photoshop icon" /></p>
                        <p>Illustrator<img src={illustrator} alt="illustrator photoshop" /></p>
                        <p>Material<img src={material} alt="Material icon" /></p>
                        <p>Wordpress<img src={wordpress} alt="wordpress icon" /></p>
                        <p>Figma<img src={figma} alt="figma icon" /></p>
                        <p>Jest<img src={jest} alt="figma icon" /></p> 
                        <p>Sanity<img src={sanity} alt="figma icon" /></p>
                        <p>Stripe<img src={stripe} alt="figma icon" /></p>    
                        <p>GraphQL<img src={graphql} alt="figma icon" /></p>                     
                    </div>
                    <h2 className='skills-title'>In Progress</h2>
                    <div className='icons'>
                        <p>Magento<img src={magento} alt="magento icon" /></p>
                        <p>PHP<img src={php} alt="php icon" /></p>
                        <p>Three.js<img src={threejs} alt="php icon" /></p>
                        <p>Shopify<img style={{filter: "invert(99%) sepia(0%) saturate(7500%) hue-rotate(243deg) brightness(103%) contrast(102%)"}}src={shopify} alt="php icon" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
