import Project from './Project';

const PROJECTS = [
  {
    name: 'AI Cover Letter Generator',
    image: 'ai.png',
    technologies: ['React', 'Node.js', 'Express.js'],
    description:
      "AI cover letter generator implemented using the OpenAI API. It takes as input the user's information and the company that wants to apply for and generates a cover letter accordingly which is then displayed in a PDF Editor using the PSPDFKit library where the user can modify the document and download it.",
    linkCode: 'https://github.com/AndreiMorariu/ai-cover-letter-generator',
    linkProject: '',
  },
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
    name: 'Web scraper',
    image: 'scrape.png',
    technologies: ['Node.js', 'Express.js', 'Puppeteer', 'React'],
    description:
      'This project consists of a web scraper implemented using Puppeteer. The user can search for a specific product, and the application retrieves all the results found on the first page of the Emag and Olx websites, based on the search terms provided by the user.',
    linkCode: 'https://github.com/AndreiMorariu/scraper',
    linkProject: '',
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
    name: 'Weather App',
    image: 'weather.png',
    technologies: ['React'],
    description:
      "A React application dynamically displaying real-time weather data according to the user's location, supplemented by the ability to search for and retrieve weather information for specific cities.",
    linkCode: 'https://github.com/AndreiMorariu/react-weather-app',
    linkProject: 'https://andreimorariu.github.io/react-weather-app/',
  },
  {
    name: 'React Quiz',
    image: 'quizz.png',
    technologies: ['React'],
    description:
      'This project presents a collection of 15 questions covering diverse aspects of React. Each question is accompanied by four multiple-choice answer options, inviting users to select the correct answer and accumulate points for each accurate response.',
    linkCode: 'https://github.com/AndreiMorariu/react-quizz',
    linkProject: 'https://andreimorariu.github.io/react-quizz/',
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
    <section className=' text-white'>
      <h2 className='text-3xl my-12 font-bold text-center text-white'>
        Some of my projects
      </h2>
      <div className='flex flex-col gap-12'>
        {PROJECTS.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
