import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project">
        <img src="/project1.jpg" alt="Project 1" />
        <h2>Project Title 1</h2>
        <p>Description of project 1. Your role, technologies used, and the outcome.</p>
      </div>

      <div className="project">
        <img src="/project2.jpg" alt="Project 2" />
        <h2>Project Title 2</h2>
        <p>Description of project 2. Your role, technologies used, and the outcome.</p>
      </div>

      <div className="project">
        <img src="/project3.jpg" alt="Project 3" />
        <h2>Project Title 3</h2>
        <p>Description of project 3. Your role, technologies used, and the outcome.</p>
      </div>
    </div>
  );
};

export default Projects;
