import Highlight from '../components/Highlight'
import Button from '../components/Button'
import emailjs from 'emailjs-com'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { gsap } from "gsap";
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { client } from '../lib/client'
import { skillsData } from '../lib/skillsData'
gsap.registerPlugin(MotionPathPlugin);

const Home = ( { posts } ) => {

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

    const particlesInit = async (main) => {
      await loadFull(main);
    };
    const particlesLoaded = (container) => {};

  return (
    <container className='h-fit relative'>
      
      <div className=''>
        <div className='relative flex min-h-screen'>
          <div style={{'-webkit-backface-visibility': 'hidden', '-webkit-transform-style': 'preserve-3d'}} className='m-auto flex flex-col w-screen md:flex-row justify-around md:max-w-[800px]'>
            <svg className='fill-transparent z-0 stroke-white absolute top-0 md:top-auto bottom-auto md:left-auto w-[130%] -left-16 right-auto md:w-[240%] lg:w-[240%] xl:w-[240%]' viewBox="-213 10 812 190">
              {/* this sets the gradient fill on the sphere, check CSS for more info */}
              <linearGradient id="lg">
                <stop style={{'stopColor': 'rgb(172, 171, 243)'}} offset="0" />
                <stop style={{'stopColor': 'rgb(209, 119, 194)'}} offset="1" />
              </linearGradient>
              <path id='ellipse' x="0px" y="0px" d="M103.3,56.9c25.4-4.4,54.4-7.3,85.3-8.2c100.6-3,182.7,16.3,183.5,43.1c0.8,26.8-80.1,50.9-180.6,53.9C90.9,148.7,8.7,129.4,8,102.6c-0.6-18.5,38-35.8,95.2-45.7"/>
              <circle fill="url(#lg)" className='stroke-[rgba(230,_129,_230,_0.582)]'  ref={moonRef}  cx="184.2" cy="36.1" r="12.9" x="0px" y="0px"/>
            </svg>
            <div id='scrollAnimation' className='md:w-1/2 md:text-right md:pr-4 z-10 py-4 text-center border-r-2 border-gray-300'>
              <div id='scrollAnimation' initiallyVisible animateIn='animate__fadeInLeft'>
                <h1 style={{"text-shadow": "2px 5px 3px rgb(238 114 238 / 84%)"}} className='text-7xl md:text-8xl bg-[#222] font-["spacerave"] text-[#cacdee]'>Luna <br />Cuevas</h1>
                <div className='md:justify-end flex justify-center gap-4 my-2'>
                  <a target='_blank' className='my-auto' href="https://www.linkedin.com/in/luna-cuevas/">
                    <img className='w-[35px]' src="/images/skills/linkedin.svg" alt="" />
                  </a>
                  <a target='_blank' href="https://github.com/luna-cuevas">
                    <img className='w-[40px]' src="/images/skills/github.svg" alt="" />
                  </a>
                  <a className='relative' target='_blank' href="https://www.upwork.com/freelancers/~016c0c41196fda1a07">
                    <img className='w-[40px] ' src="/images/upwork.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div id='scrollAnimation' className='md:w-1/2 md:p-0 md:pl-4 z-10 flex flex-col w-screen p-10 py-4 m-auto'>
              <div id='scrollAnimation' initiallyVisible animateIn='animate__fadeInRight'>
                <div className='bg-[#222]'>
                  I am a Full Stack developer specializing in front end technologies. My expertise is in building dynamic, mobile-responsive websites using React, Next.js, and Tailwind.
                  <br />
                  <br />
                  I have a background in graphic design and can make cool animations using GSAP and Three.js. 
                </div>
                <div className='md:justify-start flex justify-center gap-4'>
                  <Link href='/projects'>
                    <button id='bn30'>Projects</button>
                  </Link>
                  <Link href='/contact'>
                    <button id='bn30'>Contact</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Works */}
      <div className='flex flex-col items-center w-screen min-h-screen mb-20'>
        <h1 style={{'border-image': 'linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%'}} className='border-y-2 h-fit mx-auto text-3xl py-[2px] border-gray-300'>Highlights</h1>
        <div className='h-fit'>
          <Highlight posts={posts} />
        </div>
        <div id='scrollAnimation' className='flex gap-4'>
          <div id='scrollAnimation' className='w-[70px] flex' animateIn='animate__fadeInLeft'>
            <img src="/images/love-arrow-left.png" alt="" />
          </div>
          <Link href="/projects">
            <button id='bn30'>
              See More Work
            </button>
          </Link>
          <div id='scrollAnimation' className='w-[70px] flex' animateIn='animate__fadeInRight'>
            <img src="/images/love-arrow-right.png" alt="" />
          </div>
        </div>
      </div>
      {/* About Me */}
      <div className='flex flex-col items-center justify-center w-screen min-h-screen p-4'>
        <h1 style={{'border-image': 'linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%'}} className='border-y-2 py-[2px] h-fit mb-14 mx-auto text-3xl border-gray-300'>About Me</h1>
        <div id='scrollAnimation' className='md:max-w-[1200px] flex-col md:flex-row flex'>
          <div id='scrollAnimation'  animateOnce className='flex flex-col justify-center items-center md:w-1/2 gap-4 mb-4 p-4 text-base font-light text-left bg-[#222]' animateIn='animate__slideInLeft' animateOut='animate__fadeOutLeft'>
            <p>I'm a self-taught full stack developer primarily specializing in front end technologies and animation libraries like GSAP and three.js</p>
            <p>In the past year, I've found success as a freelance web developer working with e-commerce clients and content creators. I draft, design, and build beautiful mobile-responsive web pages with image optimization and cross browser compatibility. Clients often prefer to work with a CMS so I frequently implement a headless CMS like Strapi, Wordpress API, or Sanity. With E-Commerce clients, I've integrated Shopify, Shipstation, and Stripe APIs to empower businesses to scale at the speed they want.</p>
            <p>Currently open to new clients and opportunities. If you think we could collaborate, please feel free to  reach out below.</p>
          </div>
          <div id='scrollAnimation' duration={2} className='max-h-30 border-2 border-gray-300' animateIn='animate__fadeIn' />
          <div id='scrollAnimation' animateOnce className='md:w-1/2 flex flex-col gap-4 px-8 py-4 text-base font-light text-left' animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
            <h1 className='text-2xl underline'>Skills</h1>
            <div className='flex flex-wrap max-w-[500px] gap-8 text-sm'>
              {skillsData?.map(skill => (
                <div key={skill.id} className='w-fit flex flex-col justify-center mx-auto'>
                  <p className='mx-auto'>{skill.name}</p>
                  <img className='w-[30px] m-auto' src={skill.icon} alt="skill icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className='flex flex-col m-auto items-center md:max-w-[1200px] md:min-h-[800px] pb-28'>
        <h1 style={{'border-image': 'linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%'}} className='border-y-2 h-fit mb-14 py-[2px] mx-auto text-3xl border-gray-300'>Contact Me</h1>
        <div className='md:flex-row flex flex-col justify-center'>
          <div id='scrollAnimation' className='md:w-1/2 md:justify-end md:order-1 flex justify-center order-2'>            
            <div id='scrollAnimation' animateOnce className='w-full m-auto' animateIn='animate__fadeInLeft'>
              <div style={{'boxShadow': '0 5px 10px 0 #000'}} className=' items-center h-[450px] m-auto p-10 w-11/12 bg-[#2b2b2b]'>
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
          </div>
          <div id='scrollAnimation' className='md:w-1/3 md:pl-10 md:px-2 md:my-0 flex flex-col order-1 gap-2 px-8 my-10'>
            <div id='scrollAnimation' animateOnce animateIn='animate__fadeInRight'>
              <div className='bg-[#222]'>
                <h1 className='md:text-left mb-4 text-3xl text-center'>Let's Talk?</h1>
                <p>I'm available to take on projects and collaborate with a team to find solutions. Tell me more about your goals and the vision you're seeking to accomplish, I'll get back to you promptly.</p>
                <p className='my-2'>Via Email: <a className='text-blue-400' target='_blank' href='mailto:s.cuevas14@gmail.com'>s.cuevas14@gmail.com</a></p>
                <p>Via: <a className='text-blue-400' target='_blank' href='https://www.linkedin.com/in/luna-cuevas/'>LinkedIn</a></p>
              </div>
              <div>
                <Button link='https://github.com/luna-cuevas' text='Github' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  )
};

export default Home;

export const getStaticProps = async () => {
  const posts = await client.fetch('*[_type == "projectHighlights"] | order(order asc)');
  return {
    props:{ posts }
  }
}
