import React from 'react';
import Navigation from './Navigation';
import bannerImage from '../assets/images/banner.gif'; // Add your banner image in the assets/images folder

const Header = () => (
    <header>
        <h1>Emily Soriano</h1>
        <Navigation />
        <img src={bannerImage} alt="Banner" className="banner" />
    </header>
);

export default Header;