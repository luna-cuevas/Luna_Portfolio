import React, { useRef, useState } from "react";
import { fetcher } from '../api/api'
import qs from 'qs'
import { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  A11y, 
  EffectCreative, 
  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-creative";


const ProjectDetails = ({ project }) => {
  const title = project.attributes.projectTitle;
  const skills = project.attributes.projectSkills;
  const desc = project.attributes.projectDesc;
  const images = project.attributes.projectImages.data.map((image) => {
    return process.env.NEXT_PUBLIC_STRAPI_URL + image.attributes.url
  })
  
  return (
    <div className='max-w-[1400px] w-screen md:min-h-[600px] overflow-scroll m-auto justify-center flex flex-col md:flex-row mt-20'>
      <div className="h-fit rounded-xl md:w-1/2 flex flex-col">
        <div className='md:w-full w-screen'>
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
            {images.map((image, id) => (
              <SwiperSlide className="p-10"><img key={id} className='w-full m-auto rounded-lg' src={image} alt="" /></SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-around w-1/2 gap-4 m-auto">
          <button className="w-fit rounded-xl px-4 py-2 my-3 bg-gray-400">
            <a href="/">Live Demo</a>
          </button>
          <button className="w-fit rounded-xl px-4 py-2 my-3 bg-gray-400">
            <a href="/">Code Repo</a>
          </button>
        </div>
      </div>
      <div className='md:w-1/2 px-6 text-center'>
        <h1 className='my-4 text-2xl'>{title}</h1>
        <p className='my-4 whitespace-pre'>{skills}</p>
        <p className='font-light text-left'>{desc}</p>
      </div>
    </div>
  )
}

export default ProjectDetails

export async function getStaticPaths() {
  const projects = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`)
  const paths = projects.data.map((project) => {
    return {
      params: { slug: String(project.id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const query = qs.stringify({
    populate: ['projectImages'], 
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?${query}`)
  const projectData = projectResponse.data.find((project) => {
    if (project.id == params.slug) {
      return project
    }
  })
  return {
    props: {
      project: projectData
    }
  }
} 