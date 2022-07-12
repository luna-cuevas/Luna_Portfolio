import { fetcher } from '../pages/api/api'
import Highlight from '../components/Highlight'
import Button from '../components/Button'
import emailjs from 'emailjs-com'

import { gsap } from "gsap";
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin);

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

import { useEffect, useRef, useState } from 'react';

const Home = ( { projects } ) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  // EmailJS setting id and template id variables
  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_neh1oii';
      const templateId = 'template_vdw3ffh';
      const userId = 'user_JcD1331LVSdIeKGHTgDqA';
      const templateParams = {
        name,
        email,
        message
      };
      // If variable isn't set or input is missing, error will be console logged
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));
      // After email has been sent, all variables are now set to blank again.
      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      // if no data is input, error will alert user
      alert('Please fill in all fields.');
    }
  };

  const skillsData = [
    {id: 1, name: 'HTML', icon: '/images/skills/html5.svg'}, 
    {id: 2, name: 'CSS', icon: '/images/skills/css.svg'}, 
    {id: 3, name: 'JavaScript', icon: '/images/skills/javascript.svg'}, 
    {id: 4, name: 'React', icon: '/images/skills/react.svg'}, 
    {id: 5, name: 'Node', icon: '/images/skills/nodejs.svg'}, 
    {id: 6, name: 'PHP', icon: '/images/skills/php.svg'}, 
    {id: 7, name: 'Github', icon: '/images/skills/github.svg'}, 
    {id: 8, name: 'Sass', icon: '/images/skills/sass.svg'},
    {id: 9, name: 'Wordpress', icon: '/images/skills/wordpress.png'},
    {id: 10, name: 'Jest', icon: '/images/skills/jest-icon.svg'},
  ];

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
    <container className='h-fit relative'>
      <div className=''>
        <div className=' flex min-h-screen'>
          <div className='m-auto flex justify-around max-w-[800px]'>
            <svg className='fill-transparent z-0 stroke-white absolute top-auto bottom-auto left-auto right-auto md:w-[200%] lg:w-[180%] xl:w-[140%]' viewBox="-213 10 812 190">
              {/* this sets the gradient fill on the sphere, check CSS for more info */}
              <linearGradient id="lg">
                <stop style={{'stopColor': 'rgb(172, 171, 243)'}} offset="0" />
                <stop style={{'stopColor': 'rgb(209, 119, 194)'}} offset="1" />
              </linearGradient>
              <path id='ellipse' x="0px" y="0px" d="M103.3,56.9c25.4-4.4,54.4-7.3,85.3-8.2c100.6-3,182.7,16.3,183.5,43.1c0.8,26.8-80.1,50.9-180.6,53.9C90.9,148.7,8.7,129.4,8,102.6c-0.6-18.5,38-35.8,95.2-45.7"/>
              <circle fill="url(#lg)" className='stroke-[rgba(230,_129,_230,_0.582)]'  ref={moonRef}  cx="184.2" cy="36.1" r="12.9" x="0px" y="0px"/>
            </svg>
            <div className='z-10 w-1/2 py-4 pr-4 text-right border-r-2 border-gray-300'>
              <ScrollAnimation initiallyVisible animateIn='animate__fadeInDown' animateOut='animate__fadeOutUp'>
                <h1 style={{"text-shadow": "2px 5px 3px rgb(238 114 238 / 84%)"}} className='text-8xl bg-[#222] font-["spacerave"] text-[#cacdee]'>Luna <br />Cuevas</h1>
                <div className='flex justify-end gap-4 my-2'>
                  <a target='_blank' className='my-auto' href="https://www.linkedin.com/in/luna-cuevas/">
                    <img className='w-[35px]' src="/images/skills/linkedin.svg" alt="" />
                  </a>
                  <a target='_blank' href="https://github.com/luna-cuevas">
                    <img className='w-[40px]' src="/images/skills/github.svg" alt="" />
                  </a>
                </div>
              </ScrollAnimation>
            </div>
            <div className='z-10 flex flex-col w-1/2 py-4 pl-4'>
              <ScrollAnimation initiallyVisible animateIn='animate__fadeInDown' animateOut='animate__fadeOutUp'>
                <div className='bg-[#222]'>
                  I am a front end developer with a background in graphic design. I love to build dynamic mobile-responsive websites using HTML CSS/SCSS,Javascript, and React.
                  <br />
                  <br />
                  Creating particles, parallax designs and scroll triggered animations using libraries like GSAP and threejs is my forte.
                </div>
                <div className=' flex gap-4'>
                  <Button targetTo text='Projects' link='/projects' />
                  <Button targetTo text='Contact' link='/contact' />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      {/* Works */}
      <div className='flex flex-col items-center w-screen min-h-screen'>
        <h1 className='border-y-2 h-fit mx-auto text-3xl border-gray-300'>Highlights</h1>
        <div className='h-fit'>
          <Highlight projects={projects} />
        </div>
        <div className='flex gap-4'>
          <ScrollAnimation className='w-[50px] flex' animateIn='animate__fadeInLeft'>
            <img src="/images/love-arrow-left.png" alt="" />
            {/* <svg className='m-auto' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg> */}
          </ScrollAnimation>
          <Button targetTo text='See More Work' link='/projects' />
          <ScrollAnimation className='w-[50px] flex' animateIn='animate__fadeInRight'>
            <img src="/images/love-arrow-right.png" alt="" />
            {/* <svg  style={{'filter': 'invert(98%) sepia(0%) saturate(0%) hue-rotate(185deg) brightness(113%) contrast(100%);'}} className='m-auto' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg> */}
          </ScrollAnimation>
        </div>
      </div>
      {/* About Me */}
      <div className='flex flex-col items-center justify-center w-screen min-h-screen'>
        <h1 className='border-y-2 h-fit mb-14 mx-auto text-3xl border-gray-300'>About Me</h1>
        <div className='max-w-[1200px] flex'>
          <ScrollAnimation animateOnce className='flex flex-col w-1/2 gap-4 p-4 text-base font-light text-left' animateIn='animate__slideInLeft' animateOut='animate__fadeOutLeft'>
            <p>Hello! Thanks for taking a moment to check out my website!</p>
            <p>I'm a self-taught full stack developer primarily specializing in JAM Stack technologies and animation libraries like GSAP and three.js</p>
            <p>In the past year, I've found success as a freelance web developer working with e-commerce clients and content creators. I draft, design, and build beautiful mobile-responsive web pages with image optimization and cross browser compatibility. Clients often prefer Wordpress but I'm agile in can work with any of the major headless and traditional CMS's to ensure future updates can be done by the user.</p>
            <p>My goal is to find a group of talented engineers and help tackle modern problems with creative solutions. Thanks again for taking time to read through this, if you feel like we can work together please feel free to reach out below and I'll get back to you ASAP!</p>
          </ScrollAnimation>
          <ScrollAnimation duration='2' className='max-h-30 border-2 border-gray-300' animateIn='animate__fadeIn' />
          <ScrollAnimation animateOnce className='flex flex-col w-1/2 gap-4 px-8 py-4 text-base font-light text-left' animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
            <h1>Skills</h1>
            <div className='flex flex-wrap max-w-[500px] gap-8 text-sm'>
              {skillsData?.map(skill => (
                <div key={skill.id} className='w-fit m-auto'>
                  <p className=''>{skill.name}</p>
                  <img className='w-[40px] m-auto' src={skill.icon} alt="" />
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Contact */}
      <div className='flex flex-col m-auto items-center max-w-[1200px] min-h-[800px] pb-28'>
        <h1 className='border-y-2 h-fit mb-14 mx-auto text-3xl border-gray-300'>Contact Me</h1>
        <div className='flex'>
          <div className='flex justify-end w-1/2'>            
            <div style={{'boxShadow': '0 5px 10px 0 #000'}} className=' items-center h-[450px] p-10 w-11/12 bg-[#2b2b2b]'>
              <div className='h-full'>
                <div className='flex flex-col gap-6 m-auto'>
                  {/* input fields for name and email */}
                  <input style={{'borderImage': 'linear-gradient(90deg,#4568dc,#b06ab3) 1 1 10%'}} className='p-2 bg-transparent border-[3px]' type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                  <input style={{'borderImage': 'linear-gradient(90deg,#4568dc,#b06ab3) 1 1 10%'}} className='p-2 bg-transparent border-[3px]' type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='my-6'>Message</div>
                {/* Input field for message */}
                <textarea style={{'borderImage': 'linear-gradient(90deg,#4568dc,#b06ab3) 1 1 10%'}} className='p-2 w-full bg-transparent border-[3px] h-1/3' placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <div onClick={submit} className='button'>
                  <Button text={'Send Message'} />
                </div>
                <span className={emailSent ? 'visible' : 'hidden'}>Thank you for your message, we will be in touch in no time!</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-1/3 gap-2 pl-10'>
            <h1>Let's Talk?</h1>
            <p>I'm available to take on projects and collaborate with a team to find solutions. Tell me more about your goals and the vision you're seeking to accomplish, I'll get back to you promptly.</p>
            <p>Via Email: <span>s.cuevas14@gmail.com</span></p>
            <p>Via: <span>LinkedIn</span></p>
            <Button link='https://github.com/luna-cuevas' text='Github' />
          </div>
        </div>
      </div>
    </container>
  )
};

export default Home;

export async function getStaticProps() {
  const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/highlights?populate=*`)
  return {
    props: {
      projects: projectResponse.data
    }
  }
};
