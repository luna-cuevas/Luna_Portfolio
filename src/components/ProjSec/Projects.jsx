import React, { useState } from 'react'
import './ProjectsStyle.css'
import brooke from '../img/brooke.gif'
import Button from '../Button/Button'
import travel from '../img/travel advisor.png'
import my from '../img/my.gif'




  

const Projects = () => {
    return (
        <div id='projects' className='projects-page'>
            <h1 className='title'>Programming Projects</h1>
            <div className='projects-container'>
                <div className='project first'>
                  <div className='img-container'><img src={brooke} alt="" /></div>
                  <div className='text'>
                    <p><h3>Roller Diva</h3>The task was to design a captivating portfolio for a professional roller skater. Key features requested were 80s themes, pastel colors, blog-style graphics, and an emphasis on video playback. Features implemented:</p>
                    <p>- <b>Responsive design</b> suitable for all devices.</p>
                    <p>- Play on hover feature implemented using <b>Vimeo Player API</b>.</p>
                    <p>- Utilized vibrant colors to match the skater's style and brand.</p>
                    <p>- Implemented a mix of <b>Bootstrap</b> and custom CSS styling to fix videos onto a carousel.</p>
                    <p>- Routed a custom contact page using <b>PHP</b> to send client inquiries.</p>
                    <div id='button'>
                        <Button  link="https://brooke-cordelia.com/index.html" text={'Live Demo'}/>
                    </div>
                  </div>
                </div>
            <div className='project second'>
                <div className='text'>
                    <p><h3>Attractions Advisor</h3>The goal of this <b>React</b> application is to help users find local eateries, attractions, and hotels in their area. Using the Travel Advisor and Google Maps APIs, the user can search their locale attractions based on ratings ranging from 3 to 5 stars. Other information includes weather information, awards, phone numbers, and rankings. Features implemented:
                    </p>
                    <p>
                    - Utilized <b>Google Maps API</b> to show accurate location for attractions.  
                    </p>
                    <p>
                    - Scraped business information like address, phone number, ratings, and awards from the <b>Travel Advisor API</b>.
                    </p>
                    <p>- Populated the map with small product cards accurately displaying location of attractions.</p>
                    <p>- Implemented a <b>responsive design</b> by using Material UI.</p>
                    <div id='button'>
                        <Button  link="https://travel-advisory.netlify.app/" text={'Live Demo'}/>
                    </div>
                </div>
                <div className='img-container'><img src={travel} alt="" /></div>
            </div>
              <div className='project'>
                  <div className='img-container'><img src={my} alt="" /></div>
                  <div className='text'>
                    <p><h3>This Website</h3>I had initially created a small graphic design and development portfolio using a website builder and its built-in styling. I immediately realized the limitations in style, scope, and functionality that comes with website builders so I focused my energy on creating a multi-page website using HTML, CSS, and some JavaScript.</p>
                    <p>
                    The first initial version did not use the React framework nor Sass compiling which resulted in a functional but clunky portfolio. After some tinkering and further research, I realized that the React component structure could allow my website to function more efficiently.
                    </p>
                    <p>
                    You are currently looking at the latest iteration of this portfolio. Here are some of the key features:</p>
                    <p>- Structured using the <b>React</b> framework so components like buttons and navigation are shared across the app. </p>
                    <p>- Optimized CSS styling with the <b>Sass</b> compiler to ensure cross-browser functionality.</p>
                    <p>- Animated text, elements, and images using <b>GSAP</b> and ScrollTrigger.</p>
                    <p>- Utilized EmailJS to create a lightweight serverless contact form.</p>
                    <p>- Responsive design using relative units.</p>
                    <div id='button'>
                        <Button  link="https://github.com/luna-cuevas/luna_portfolio_react" text={'GitHub Repo'}/>
                    </div>
                  </div>  
              </div>
            </div>
        </div>
    )
}

export default Projects
