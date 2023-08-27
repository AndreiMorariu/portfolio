import Project from './Project';

const PROJECTS = [
  {
    name: 'Social Media App',
    image: 'mern.png',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis accusantium quo perspiciatis blanditiis necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis accusantium quo perspiciatis blanditiis necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis accusantium quo perspiciatis blanditiis necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis accusantium quo perspiciatis blanditiis necessitatibus',
    linkCode: 'https://github.com/AndreiMorariu/licenta',
    linkProject: '',
  },
  {
    name: 'Weather App',
    image: 'weather.png',
    technologies: ['React'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis accusantium quo perspiciatis blanditiis necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis accusantium quo perspiciatis blanditiis necessitatibus',
    linkCode: 'https://github.com/AndreiMorariu/react-weather-app',
    linkProject: 'https://andreimorariu.github.io/react-weather-app/',
  },
  {
    name: 'React Quizz',
    image: 'quizz.png',
    technologies: ['React'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis accusantium quo perspiciatis blanditiis necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis accusantium quo perspiciatis blanditiis necessitatibus',
    linkCode: 'https://github.com/AndreiMorariu/react-quizz',
    linkProject: 'https://andreimorariu.github.io/react-quizz/',
  },
];

function Projects() {
  return (
    <section className='pt-4 text-white'>
      <h2 className='text-2xl md:text-left mb-4 font-bold '>
        Some of my projects
      </h2>
      <div className='flex flex-col gap-10'>
        {PROJECTS.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
