import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";

const Portfolio = ({ id }) => {
  return (
    <section className="portfolio" id={id}>
      <div className="container mx-auto px-10 lg:px-20">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
