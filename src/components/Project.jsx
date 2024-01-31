function Project({ project }) {
  return (
    <div className='text-left md:grid md:grid-cols-2 md:gap-8 items-center md:pr-10'>
      <img
        src={`./${project.image}`}
        alt={project.name}
        className='rounded-lg w-full h-full aspect-video object-cover object-top'
      />
      <div className='flex flex-col sm:max-lg:justify-between h-full lg:gap-6'>
        <header>
          <h3 className='font-bold uppercase text-xl lg:text-2xl mb-4 mt-2 md:mt-0 md:mb-2 lg:mt-0 '>
            {project.name}
          </h3>
          <div className='flex gap-6 text-emerald-200 md:text-lg lg:text-xl mb-4 first-line:md:mb-2'>
            {project.technologies.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </header>
        <div className='flex flex-col h-full'>
          <p className='text-slate-200 text-md lg:text-lg'>
            {project.description}
          </p>
          <div className='flex gap-6 uppercase mt-3 md:self-end lg:mt-auto lg:pt-4'>
            <a
              href={project.linkCode}
              className='border-b-2 border-b-emerald-300 hover:border-b-emerald-500'
              target='_blank'
              rel='noreferrer'
            >
              View Code
            </a>
            {project.linkProject && (
              <a
                href={project.linkProject}
                className='border-b-2 border-b-emerald-300 hover:border-b-emerald-500'
                target='_blank'
                rel='noreferrer'
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
