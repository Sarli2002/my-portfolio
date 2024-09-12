import React from "react";
import "./Projects.css";
import projectList from "../../Assets/Projects";

export default function Projects() {
  return (
    <div className="projects" id="Projects">
      <div className="projects-max-width">
        <div className="projects-heading">
          <h1 className="title">Projects</h1>
        </div>

        <div className="serv-content">
          {projectList.map((project, index) => (
            <div className="card" key={index}>
              
              <div className="box">
                <img src={project.image} alt={project.title} 
                className="project-image" />
              </div>
                
                <a href={project.link} className="title"   target="_blank"  rel="noopener noreferrer">{project.title}</a>
                <p>{project.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
