import Project from '../components/Project'
import { client } from '../lib/client'

const projects = ({ posts }) => {

  return (
    <div className='flex mt-10 justify-center md:mt-[25vh] mb-[10vh] gap-5 md:gap-10 flex-wrap max-w-[1400px] m-auto'>
      {posts && posts?.map((project, id) => (
        <Project key={id} project={project} />
      ))}
    </div>
  )
};

export default projects;

export const getStaticProps = async () => {
  const posts = await client.fetch('*[_type == "post"] | order(order asc)');
  return {
    props:{ posts }
  }
}