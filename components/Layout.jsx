import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Layout = ({children}) => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {};
  
  return (
    <main className='bg-[#222] overflow-hidden min-h-screen text-white whitespace-pre-wrap'>
      <Particles 
        init={particlesInit} 
        loaded={particlesLoaded}
        className='absolute top-0 bottom-0 left-0 right-0'
        params={{
          "particles": {
            "number": {
              "value": 10,
              "density": {
                "enable": true,
                "value_area": 3000
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "image",
              "stroke": {
                "width": 0,
                "color": "#fff"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": '/images/shooting-star.svg',
                "width": 5,
                "height": 5
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 50,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 4,
              "direction": "bottom-left",
              "random": false,
              "straight": true,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 4261.397264814273,
                "rotateY": 4498.141557303954
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 194.89853095232286,
                "line_linked": {
                  "opacity": 0.32082394169230544
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
        "retina_detect": true}} 
      />
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout