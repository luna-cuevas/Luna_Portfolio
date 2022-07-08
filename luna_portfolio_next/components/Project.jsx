const Project = ({ project }) => {
  const title = project.attributes.projectTitle;
  const skills = project.attributes.projectSkills;
  const desc = project.attributes.projectDesc;
  const images = process.env.NEXT_PUBLIC_STRAPI_URL + project.attributes.projectImages.data.attributes.url;

  return (
    <div className='w-1/4 m-auto text-center border-2 border-gray-200'>
      <img className='h-1/3 p-4 m-auto' src={images} alt="" />
      <h1 className='text-xl'>{title}</h1>
      <p className='text-sm'>{skills}</p>
      <p>{desc}</p>
      <button className="hover:bg-gradient-to-l hover:shadow-[2px_3px_0px_#c679c9] transition-all duration-600 bg-gradient-to-r from-[#4568dc] to-[#b06ab3] rounded-lg px-8 py-1 m-3">
        <a href={`/project-details/${project.id}`}>link</a>
      </button>
    </div>
  ) 
}

export default Project