import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="/profile.jpg" alt="Your Name" className="profile-pic" />
      <p>Hello! I'm [Jaycob Branco], a web developer with experience in building ...</p>
      <a href="/resume.pdf" className="btn" download>Download My Resume</a>
    </div>
  );
};

export default About;
