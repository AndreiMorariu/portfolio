import Project from './Project';

const PROJECTS = [
  {
    name: 'Social Media App',
    image: 'mern.png',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'A social media application developed using the MERN stack, featuring fundamental capabilities such as post creation, follower interactions, likes, user profiles, and real-time messaging.',
    linkCode: 'https://github.com/AndreiMorariu/licenta',
    linkProject: '',
  },
  {
    name: 'Weather App',
    image: 'weather.png',
    technologies: ['React'],
    description:
      "A React application dynamically displaying real-time weather data according to the user's location, supplemented by the ability to search for and retrieve weather information for specific cities.",
    linkCode: 'https://github.com/AndreiMorariu/react-weather-app',
    linkProject: 'https://andreimorariu.github.io/react-weather-app/',
  },
  {
    name: 'React Quizz',
    image: 'quizz.png',
    technologies: ['React'],
    description:
      'This project presents a collection of 15 questions covering diverse aspects of React. Each question is accompanied by four multiple-choice answer options, inviting users to select the correct answer and accumulate points for each accurate response.',
    linkCode: 'https://github.com/AndreiMorariu/react-quizz',
    linkProject: 'https://andreimorariu.github.io/react-quizz/',
  },
  {
    name: 'E-commerce Website',
    image: 'laravel.png',
    technologies: ['Laravel', 'MySQL'],
    description:
      'The project involves developing an e-commerce platform using the Laravel framework for the backend and MySQL database for data management. It also features an admin panel to easily manage products in the database, including adding, editing, or removing items.',
    linkCode: 'https://github.com/AndreiMorariu/laravel',
    linkProject: '',
  },
  {
    name: 'Activity Tracker: Record and Map Workouts',
    image: 'map.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'An application where users can add their workout locations, whether they were running or cycling, and add aditional information about their workout.',
    linkCode: 'https://github.com/AndreiMorariu/Mapty',
    linkProject: 'https://andreimorariu.github.io/Mapty/',
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
