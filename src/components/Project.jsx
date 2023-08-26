function Project({ project }) {
  return (
    <div className='text-left '>
      <img
        src={`./${project.image}`}
        alt={project.name}
        className='rounded-lg aspect-video object-cover object-top'
      />
      <h3 className='font-bold uppercase text-xl mt-2'>{project.name}</h3>
      <div className='flex gap-6 uppercase'>
        {project.technologies.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div className='flex gap-6 uppercase mt-4'>
        <a
          href={project.linkCode}
          className='border-b-2 border-b-emerald-300 hover:border-b-emerald-500'
          target='_blank'
          rel='noreferrer'
        >
          View Code
        </a>
        <a
          href={project.linkProject}
          className='border-b-2 border-b-emerald-300 hover:border-b-emerald-500'
          target='_blank'
          rel='noreferrer'
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;
