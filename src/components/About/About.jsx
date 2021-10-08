import React from 'react'
import './AboutStyle.css'
import me from '../img/me.png'
import Button from '../Button/Button'
import react  from '../img/react.svg'
import javascript from '../img/javascript.svg'
import html5 from '../img/html5.svg'
import css3 from '../img/css.svg'
import sass from '../img/sass.svg'
import bootstrap from '../img/bootstrap.svg'
import node from '../img/nodejs.svg'
import que from '../img/que.svg'
import github from '../img/github.svg'
import photoshop from '../img/photoshop.svg'
import illustrator from '../img/illustrator.svg'
import mongo from '../img/mongoDB.svg'
import material from '../img/material.svg'
import resume from '../misc./Luna.Cuevas.prod.pdf'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='info' id='info'>
            <h1 className="title">About Me</h1>
            <div className='blurb gradient-border'>
                <div className='about-container'>
                    <img id="pic" src={me} alt="a picture of me, Luna Cuevas"></img>
                    <div className='lorem'>
                        <p>Hello! Thanks for taking a moment to check out my website!</p>
                        <p>I'm an aspiring full-stack developer working on their second year of self-teaching web development. I have been using Udemy courses, bootcamp material, Youtube tutorials, and <i>plenty</i> of books to reinforce the fundamentals of web development.</p>
                        <p>The reason I embarked on this journey was because I found myself at a crossroads in my life. After graduating from U.C. Berkeley with a degree in Political Science, and working with startups in a variety of roles for 4 years, I realized that I needed the sense of fulfillment that comes with a career. I wanted my work to have a meaningful impact. And as someone obsessed with technology and its socio-political impact, I decided to learn to code. Perhaps more selfishly, I admit that as a transgender person, the stability and community afforded to developers regardless of identity is a strong motivating factor.</p>
                        <p>Nevertheless, this portfolio exists as an example of my design and development skills. The goal is to find a team of talented engineers to take a chance and allow me to demonstrate my capabilities to design and develop great features, applications, and user experiences. Regardless of your position, I would really appreciate any feedback, comments, or mentorship you wish to give.</p>
                        <p>Thanks again for taking time to read through this, you're awesome! You can learn more about me by clicking the button below.</p>
                        <div className='button1'>
                            <Link to='/about'>
                                <Button text={'More'} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='skills'>
                <h2>Work Experience</h2>
                <div className='work'>
                    <img src={que} alt="que bottle image" /> 
                    <div className='work-info'>
                        <span>Warehouse Manager | Que Bottle | 06/2018 - 10/2020</span>
                        <p>• Supervising teams of 2-10 fulfillment associates in packaging daily orders.</p>
                        <p>• Creating operational guides, handbooks, and best practices.</p>
                        <p>• Contacting customers to resolve delivery issues, returns, or replacements.</p>
                        <p>• Execute quarterly fulfillment goals and plan inventory restocking accordingly.</p>
                        <p>• Onboard new permanent and seasonal associates throughout the year.</p>
                        <p>• Contact B2B clients regarding custom orders or troubleshooting issues.</p>
                    </div>
                </div>
                <div className='button'><Button link={resume} text={'Resume'} /></div>
                    <h2>Skills</h2>
                    <div className='icons'>
                        <p>React <img src={react} alt="react icon" /></p>
                        <p>JavaScript <img src={javascript} alt="" /></p>
                        <p>HTML5 <img src={html5} alt="" /></p> 
                        <p>CSS3 <img src={css3} alt="" /></p>
                        <p>Sass <img src={sass} alt="" /></p>
                        <p>Bootstrap <img src={bootstrap} alt="" /></p>
                        <p>Node.js <img src={node} alt="" /></p>
                        <p>MongoDB <img src={mongo} alt="" /></p>
                        <p>GitHub <img src={github} alt="" /></p>
                        <p>Photoshop <img src={photoshop} alt="" /></p>
                        <p>Illustrator <img src={illustrator} alt="" /></p>
                        <p>Material-UI <img src={material} alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
