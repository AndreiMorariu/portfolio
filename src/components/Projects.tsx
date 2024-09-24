import Project from "./Project";

import projects from "../../projects.json";

function Projects() {
  return (
    <section className=" text-white">
      <h2 className="text-4xl my-12 font-bold text-center text-white">
        Some of my projects
      </h2>
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
