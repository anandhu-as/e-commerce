import React from "react";

const About = () => {
  return (
    <section className="container mx-auto py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto bg-white">
        <h1 className="text-3xl font-bold mb-4 bg-white pt-4 ">BORED-APES</h1>
        <p className="text-lg mb-4 bg-white animate__animated animate__fadeInUp text-animate">
          Bored Apes are a specific collection of 10,000 non-fungible tokens.
          Each NFT is a singular image of a unique Bored Ape. Every image is a
          portrait of an Ape with specific characteristics. This app is made for
          learning purposes.
        </p>

        <h1 className="text-3xl font-bold mb-4 bg-white pt-4">About Me</h1>
        <p className="text-lg mb-4 bg-white animate__animated animate__fadeInUp">
          Hello! My name is Anandhu As, and I'm a frontend developer and
          computer science student. I'm passionate about building user-friendly
          and engaging web applications using new technologies.
        </p>
        <p className="text-lg mb-4 bg-white animate__animated animate__fadeInUp">
          I have experience working with various frontend frameworks and
          libraries like React, and I love exploring new tools to enhance my
          development skills.
        </p>
        <p className="text-lg mb-4 bg-white animate__animated animate__fadeInUp">
          In my free time, I enjoy contributing to open-source projects and
          learning new programming concepts. Besides coding, I also like playing
          video games and reading tech blogs.
        </p>
      </div>
    </section>
  );
};

export default About;
