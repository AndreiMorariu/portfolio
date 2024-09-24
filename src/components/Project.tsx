import { BackgroundGradient } from "./background-gradient";

interface ProjectProps {
  project: {
    name: string;
    image: string;
    technologies: string[];
    description: string;
    linkCode: string;
    linkProject?: string;
  };
}

function Project({ project }: ProjectProps) {
  return (
    <div className="text-left md:grid md:grid-cols-2 md:gap-8 items-center md:pr-10">
      <BackgroundGradient>
        <img
          src={`./${project.image}`}
          alt={project.name}
          className="rounded-3xl w-full h-full aspect-video object-cover object-top"
        />
      </BackgroundGradient>
      <div className="flex flex-col sm:max-lg:justify-between h-full lg:gap-6">
        <header>
          <h3 className="font-bold uppercase text-2xl lg:text-2xl mb-4 mt-2 md:mt-0 md:mb-2 lg:mt-0 ">
            {project.name}
          </h3>
          <div className="flex gap-4 text-emerald-400 md:text-lg lg:text-xl mb-4 first-line:md:mb-2">
            {project.technologies.map((item, i) => (
              <span key={i} className="font-bold text-lg">
                {item}
              </span>
            ))}
          </div>
        </header>
        <div className="flex flex-col h-full">
          <p className="text-slate-200 text-lg lg:text-lg">
            {project.description}
          </p>
          <div className="flex gap-6 uppercase mt-3 md:self-end lg:mt-auto lg:pt-4">
            <a
              href={project.linkCode}
              className="border-b-2 border-b-emerald-400 hover:border-b-emerald-600"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
            {project.linkProject && (
              <a
                href={project.linkProject}
                className="border-b-2 border-b-emerald-400 hover:border-b-emerald-600"
                target="_blank"
                rel="noreferrer"
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
