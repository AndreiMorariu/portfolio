import { useEffect, useState } from 'react';

function Project({ project }) {
  const [maxWords, setMaxWords] = useState(0);

  useEffect(() => {
    let newMaxWords = 0;
    if (window.innerWidth < 1024) newMaxWords = 15;
    if (window.innerWidth >= 1024 && window.innerWidth < 1280) newMaxWords = 30;
    if (window.innerWidth >= 1280 && window.innerWidth < 1536) newMaxWords = 50;
    if (window.innerWidth >= 1536)
      newMaxWords = project.description.split(' ').length;
    setMaxWords(newMaxWords);

    const handleResize = () => {
      let newMaxWords = 0;
      if (window.innerWidth < 1024) newMaxWords = 15;
      if (window.innerWidth >= 1024 && window.innerWidth < 1280)
        newMaxWords = 30;
      if (window.innerWidth >= 1280 && window.innerWidth < 1536)
        newMaxWords = 50;
      if (window.innerWidth >= 1536)
        newMaxWords = project.description.split(' ').length;
      setMaxWords(newMaxWords);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [project.description]);

  const descriptionWords = project.description.split(' ');

  const truncatedDescription =
    descriptionWords.length > maxWords
      ? descriptionWords.slice(0, maxWords).join(' ')
      : project.description;

  return (
    <div className='text-left md:grid md:grid-cols-2 md:gap-6 items-center md:pr-10'>
      <img
        src={`./${project.image}`}
        alt={project.name}
        className='rounded-lg xl:w-4/5 aspect-video object-cover object-top mx-auto'
      />
      <div className='flex flex-col sm:max-lg:justify-between h-full lg:gap-6'>
        <header>
          <h3 className='font-bold uppercase text-xl lg:text-2xl mt-2 md:mt-0 lg:mt-0 md:mb-2'>
            {project.name}
          </h3>
          <div className='flex gap-6 md:text-emerald-200 md:text-lg lg:text-xl md:mb-2'>
            {project.technologies.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </header>
        <div className='flex flex-col h-full'>
          <p className='hidden md:block text-slate-200 text-md lg:text-lg'>
            {truncatedDescription}
          </p>
          <div className='flex gap-6 uppercase mt-3 md:self-end lg:mt-auto'>
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
      </div>
    </div>
  );
}

export default Project;
