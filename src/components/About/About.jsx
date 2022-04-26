import React from 'react'
import './AboutStyle.css'
import me from '../img/me.png'
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

const About = () => {
    return (
        <div className='info' id='info'>
            <h1 className="title">About Me</h1>
            <div className='blurb gradient-border'>
                <div className='about-container'>
                    <img id="pic" src={me} alt="Luna Cuevas"></img>
                    <div className='lorem'>
                        <p>Hello! Thanks for taking a moment to check out my website!</p>
                        <p>I'm a front end developer with over two years of knowledge and experience. I use Udemy courses, bootcamp material, tutorials, and <i>plenty</i> of books to reinforce the fundamentals of web development. I've also gained a community of developers through online forums.</p>
                        <p>In the past year, I've found success as a freelance web developer working with e-commerce clients and content creators. I draft, design, and build beautiful mobile-responsive web pages with SEO optimization and cross browser compatibility. I can also modify CSS and PHP code in CMS tools like Wordpress, Wix, and Squarespace. </p>
                        <p>My goal is to find a group of talented engineers and help tackle modern problems with creative solutions. You can check out my projects and work below. Thanks again for taking time to read through this, you're awesome!</p>
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
