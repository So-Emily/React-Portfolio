import React from "react";
import profileImage from '../assets/images/profile.jpg'; 

const AboutMe = () => (
    <section>
        <h2>About Em</h2>
        
        <p>Bio about Emily Soriano...</p>
        
        <img src={profileImage} alt="Emily Soriano" className="profile" />
    </section>
);

export default AboutMe;