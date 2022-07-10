import Button from "../components/Button";

const Project = ({ project }) => {
  const title = project.attributes.projectTitle;
  const skills = project.attributes.projectSkills;
  const desc = project.attributes.projectDesc.slice(0, 200) + '...';
  const image = process.env.NEXT_PUBLIC_STRAPI_URL + project.attributes.projectImages.data[0].attributes.url
  return (
    <div className='lg:w-1/4 h-fit w-screen sm:w-[45%] mx-auto text-center border-2 border-gray-200'>
      <img className='h-1/3 p-4 m-auto' src={image} alt="" />
      <div className="w-5/6 m-auto">
        <h1 className='md:text-xl py-1 text-base'>{title}</h1>
        <p className='my-2 text-xs'>{skills}</p>
        <p className="text-sm font-light text-left">{desc}</p>
      </div>
      <Button targetTo text='Read More' link={`/project-details/${project.id}`} className="hover:bg-gradient-to-l hover:shadow-[2px_3px_0px_#c679c9] transition-all duration-600 bg-gradient-to-r from-[#4568dc] to-[#b06ab3] rounded-lg px-8 py-1 m-3" />
    </div>
  ) 
}

export default Project