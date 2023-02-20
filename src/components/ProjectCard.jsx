import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex justify-between">
        <a
          target="_blank"
          rel="noreferrer"
          href={project.url}
          className="card_text font-semibold"
        >
          View Project
        </a>
        <div className="flex">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-gray-600 text-sm font-medium mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
