import Project from '../components/Project'
import { fetcher } from './api/api'

const projects = ({ projects }) => {

  return (
    <div className='flex mt-10 justify-center md:mt-[25vh] mb-[10vh] gap-5 md:gap-10 flex-wrap max-w-[1400px] m-auto'>
      {projects && projects?.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
};

export default projects;

export async function getStaticProps() {
  const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*&_sort=updatedAt:DESC`)
  return {
    props: {
      projects: projectResponse.data
    }
  }
};