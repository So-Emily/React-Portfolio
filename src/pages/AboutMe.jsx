import React from "react";
import profileImage from '../assets/images/profile.jpg'; 

const AboutMe = () => (
    <section>
        <h2>About Me</h2>
        <img src={profileImage} alt="Emily Soriano" className="profile" />
        <p>Bio about Emily Soriano...</p>
    </section>
);

export default AboutMe;