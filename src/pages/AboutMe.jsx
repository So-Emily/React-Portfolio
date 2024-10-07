import React from "react";
import profileImage from '../assets/images/profile.jpg'; 

const AboutMe = () => (
    <section>
        <h2 class="wiggle">Welcome!</h2>

        {/* <p class="wiggle">Hello there!</p> */}
        
        <p>This is a place I have created to showcase my coding projects<br></br>
        and share my journey in full stack web development.</p>

        <img src={profileImage} alt="Emily Soriano" className="profile" />
    </section>
);

export default AboutMe;