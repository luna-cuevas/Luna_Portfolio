// Import Custom Components
import Button from '../components/Button';

// Import Third Party Components
import { 
  Navigation, 
  Pagination, 
  EffectCreative, 
  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-creative";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const Highlight = ( { projects } ) => {
  return (
    <>
        {projects && projects?.map(( project ) => (
          <div key={project.id} id='projects' className='flex max-w-[1300px] py-14 m-auto'>
            <div className='w-1/2'>
              <ScrollAnimation animateIn='animate__slideInLeft' animateOut='animate__fadeOutLeft'>
                <Swiper
                  modules={[ 
                    Navigation, 
                    Pagination, 
                    EffectCreative,
                    Autoplay]}
                  slidesPerView={1}
                  navigation
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: false,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  className="mySwiper"
                  style={{'color': 'white !important'}}
                  pagination={{ clickable: true }}
                >
                  {project.attributes.images.data.map((image, id) => (
                    <SwiperSlide key={id} className="p-10">
                      <img className='w-full m-auto rounded-lg' src={process.env.NEXT_PUBLIC_STRAPI_URL + image.attributes.url} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ScrollAnimation>
            </div>
            <div className='flex flex-col w-1/2 px-6'>
              <ScrollAnimation animateIn='animate__slideInRight' animateOut='animate__fadeOutRight'>
                <h2 className='text-2xl'>{project.attributes.title}</h2>
                <span className='flex gap-4 my-4 text-xs' id='tailwind'>
                  {project.attributes.skills.map((skillObj) => (
                    <span key={skillObj.id} className='text-xs'>{skillObj.skill}</span>
                  ))}
                </span>
                <div className='text-sm'>
                  <span>{project.attributes.description}</span>
                </div>
                <div className='flex'>
                  <Button link={project.attributes.linkToDemo} text={'Live Demo'}/>
                  <Button link={project.attributes.linkToRepo} text={'Github Repo'} />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        ))}


    </>
  )
}

export default Highlight