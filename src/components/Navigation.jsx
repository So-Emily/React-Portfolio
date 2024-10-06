import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
        <li><Link to="/">About Em</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact Em</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        </ul>
    </nav>
);

export default Navigation;