import React, { useState } from 'react'
import './ProjectsStyle.css'
import brooke from '../img/brooke.gif'
import Button from '../Button/Button'
import travel from '../img/travel advisor.png'
import JAndP from '../img/j&p-webpage-mockup.png'
import my from '../img/my.png'
import frame from '../img/chrome-frame.png'

const Projects = () => {
    return (
        <div id='projects' className='projects-page'>
            <h1 className='title'>Work & Projects</h1>
            <div className='projects-container'>
                <div className='project first'>
                    <div className='img-container'><img id='frame' src={frame} alt="" /><img id='project-img' src={JAndP} alt="" /></div>
                    <div className='text'>
                    <h2>Jazz And Print</h2>
                    <span className='techs'>
                        <p>HTML</p>
                        <p>CSS/SCSS</p>
                        <p>Javascript</p>
                        <p>PHP</p>                        
                    </span>
                    <span>This client reached out requesting an update to their printing shop webpage. Run on a PHP-based CMS, some of the challenges included finding overwritten style sheets and modifying PHP code to improve UX. The goal was to improve the design, optimize SEO keywords, and generate more web traffic. Features implemented:</span>
                    <p>• Increased SEO rating from 22% to 91%, fixed meta tags, improved sitemap. </p>
                    <p>• Improved user experience across browsers and devices.</p>
                    <p>• Increased web traffic by 31%.</p>
                    <p>• Updated image carousel to include a colorful progress bar.</p>
                    <p>• Designed 10 product mockups and banners for display on home page.</p>
                    <div className='button'>
                        <Button link="https://brooke-cordelia.com/" text={'Live Demo'}/>
                        <Button link="https://github.com/luna-cuevas/jazzandprint" text={'Github Repo'} />
                    </div>
                </div>
            </div>
                <div className='project second'>
                  <div className='img-container'><img id='frame' src={frame} alt="" /><img id='project-img' src={brooke} alt="" /></div>
                  <div className='text'>
                    <h2>Roller Diva</h2>
                    <span className='techs'>
                        <p>HTML</p>
                        <p>CSS/SCSS</p>
                        <p>Javascript</p>
                        <p>React</p>                        
                    </span>
                    <span>The task was to design a captivating portfolio for a professional roller skater. Key features requested were 80s themes, pastel colors, blog-style graphics, and an emphasis on video playback. Features implemented:</span>
                    <p>• <b>Responsive design</b> suitable for all devices.</p>
                    <p>• Play on hover feature implemented using <b>Vimeo Player API</b>.</p>
                    <p>• Utilized vibrant colors to match the skater's style and brand.</p>
                    <p>• Implemented a mix of <b>Bootstrap</b> and custom CSS styling to fix videos onto a carousel.</p>
                    <p>• Routed a custom contact page using <b>PHP</b> to send client inquiries.</p>
                    <div className='button'>
                        <Button link="https://brooke-cordelia.com/" text={'Live Demo'}/>
                        <Button link="https://github.com/luna-cuevas/Cordelia_Portfolio" text={'Github Repo'} />
                    </div>
                  </div>
                </div>
            <div className='project'>
            <div id='trvl-img'className='img-container'><img id='frame' src={frame} alt="" /><img id='project-img' src={travel} alt="" /></div>
                <div id='trvl-text' className='text'>
                    <h2>Attractions Advisor</h2>
                    <span className='techs'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>Material</p>                        
                    </span>
                    <span>The goal of this <b>React</b> application is to help users find local eateries, attractions, and hotels in their area. Using the Travel Advisor and Google Maps APIs, the user can search their locale attractions based on ratings ranging from 3 to 5 stars. Other information includes weather information, awards, phone numbers, and rankings. Features implemented:
                    </span>
                    <p>
                    • Utilized <b>Google Maps API</b> to show accurate location for attractions.  
                    </p>
                    <p>
                    • Scraped business information like address, phone number, ratings, and awards from the <b>Travel Advisor API</b>.
                    </p>
                    <p>• Populated the map with small product cards accurately displaying location of attractions.</p>
                    <p>• Implemented a <b>responsive design</b> by using Material UI.</p>
                    <div className='button'>
                        <Button link="https://trvler.netlify.app/" text={'Live Demo'}/>
                        <Button link="https://github.com/luna-cuevas/travel-advisor" text={'Github Repo'} />
                    </div>
                </div>
                
            </div>
              <div className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="" /><img id='project-img' src={my} alt="" /></div>
                  <div className='text'>
                    <h2>This Website</h2>
                    <span className='techs'>
                        <p>HTML</p>
                        <p>CSS/SCSS</p>
                        <p>Javascript</p>
                        <p>React</p>                        
                    </span>
                    <span>The first initial version did not use the React framework nor Sass compiling which resulted in a functional but clunky portfolio. After some tinkering and further research, I realized that the React component structure could allow my website to function more efficiently. </span>
                    <span>
                    You are currently looking at the latest iteration of this portfolio. Here are some of the key features:</span>
                    <p>• Structured using the <b>React</b> framework so components like buttons and navigation are shared across the app. </p>
                    <p>• Optimized CSS styling with the <b>Sass</b> compiler to ensure cross-browser functionality.</p>
                    <p>• Animated text, elements, and images using <b>GSAP</b> and ScrollTrigger.</p>
                    <p>• Utilized EmailJS to create a lightweight serverless contact form.</p>
                    <p>• Responsive design using relative units.</p>
                    <div className='button'>
                        <Button  link="https://github.com/luna-cuevas/Luna_Portfolio" text={'GitHub Repo'}/>
                    </div>
                  </div>  
              </div>
            </div>
        </div>
    )
}

export default Projects
