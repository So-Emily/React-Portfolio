import React from 'react';
import Navigation from './Navigation';
import bannerImage from '../assets/images/banner.gif'; // Add your banner image in the assets/images folder

const Header = () => (
    <header>
        <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner" />
        <h1 className="banner-title">Emily Soriano</h1>
        </div>
        <Navigation />
    </header>
);

export default Header;