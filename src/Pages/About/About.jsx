import React from "react";
import { about2, about3, aboutMe, paragraph } from "../../NFT/Data";

const About = () => {
  return (
    <section className="container mx-auto py-16 px-4 ">
      <div className="max-w-2xl mx-auto ">
        <h1 className="text-3xl font-bold mb-4  pt-4 text-pink-700 ">
          BORED-APES
        </h1>
        <p className="text-lg mb-4  animate__animated animate__fadeInUp text-white ">
          {paragraph}
        </p>

        <h1 className="text-3xl font-bold mb-4 text-pink-700 pt-4">About Me</h1>
        <p className="text-lg mb-4 text-white animate__animated animate__fadeInUp">
          {aboutMe}
        </p>
        <p className="text-lg mb-4 text-white animate__animated animate__fadeInUp">
          {about2}
        </p>
        <p className="text-lg mb-4 text-white animate__animated animate__fadeInUp">
          {about3}
        </p>
      </div>
    </section>
  );
};

export default About;
