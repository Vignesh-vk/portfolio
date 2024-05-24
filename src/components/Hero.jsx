import React from "react";
import hero from "../assets/images/hero.jpg";
const Hero = () => {
  const social_media = [
    { name: "Instagram", icon: "logo-instagram", link: "https://instagram.com" },
    { name: "Facebook", icon: "logo-facebook", link: "https://facebook.com" },
    { name: "LinkedIn", icon: "logo-linkedin", link: "https://linkedin.com" },
    { name: "Twitter", icon: "logo-twitter", link: "https://twitter.com" },
  ];


  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
          <img
            src={hero}
            alt=""
            className="w-full object-cover bg-cyan-600 rounded-xl"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Vigneshkumar</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((item) => (
              <a key={item.icon} href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="text-gray-600 hover:text-white cursor-pointer transition-colors duration-300">
                  <ion-icon name={item.icon}></ion-icon>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
