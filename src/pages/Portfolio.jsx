import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <Project title="Project 1" image="/path/to/image1.jpg" deployedLink="https://deployed-link1.com" repoLink="https://github.com/repo1" />
    <Project title="Project 2" image="/path/to/image2.jpg" deployedLink="https://deployed-link2.com" repoLink="https://github.com/repo2" />
    {/* Add more projects as needed */}
  </section>
);

export default Portfolio;