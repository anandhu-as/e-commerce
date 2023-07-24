import React from "react";
import { about2, about3, aboutMe, paragraph } from "../../NFT/Data";

const About = () => {
  return (
    <section className="container mx-auto py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto bg-white">
        <h1 className="text-3xl font-bold mb-4 bg-white pt-4 ">BORED-APES</h1>
        <p className="text-lg mb-4 bg-white animate__animated animate__fadeInUp ">
          {paragraph}
        </p>

        <h1 className="text-3xl font-bold mb-4 bg-white pt-4">About Me</h1>
        <p className="text-lg mb-4 bg-white animate__animated animate__fadeInUp">
          {aboutMe}
        </p>
        <p className="text-lg mb-4 bg-white animate__animated animate__fadeInUp">
          {about2}
        </p>
        <p className="text-lg mb-4 bg-white animate__animated animate__fadeInUp">
          {about3}
        </p>
      </div>
    </section>
  );
};

export default About;
