import React from 'react'
import { fetcher } from '../api/api'
import qs from 'qs'

const ProjectDetails = ({ project }) => {
  const title = project.attributes.projectTitle;
  const skills = project.attributes.projectSkills;
  const desc = project.attributes.projectDesc;
  const images = process.env.NEXT_PUBLIC_STRAPI_URL + project.attributes.projectImages.data.attributes.url;

  return (
    <div>
      <img src={images} alt="" />
      <h1>{title}</h1>
      <p>{skills}</p>
      <p>{desc}</p>
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