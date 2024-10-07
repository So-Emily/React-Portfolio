import React from 'react';
import Project from '../components/Project';
import listItImage from '../assets/images/projects/list-it-img.png';
import weatherDripImage from '../assets/images/projects/weather-drip.png';

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="portfolio-items">
      <Project title="List It" image={listItImage} deployedLink="https://deployed-link1.com" repoLink="https://github.com/repo1" />
      <Project title="Weather Drip" image={weatherDripImage} deployedLink="https://deployed-link2.com" repoLink="https://github.com/repo2" />
      {/* Add more projects as needed */}
    </div>
  </section>
);

export default Portfolio;