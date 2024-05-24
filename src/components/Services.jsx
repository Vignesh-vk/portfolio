import React, { useState } from "react";
import { FaCode, FaMobileAlt, FaLaptopCode, FaSketch, FaPencilAlt, FaPaintBrush } from 'react-icons/fa'

const Services = () => {
  const [activeTab, setActiveTab] = useState("development");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const servicesData = {
    design: {
      tab: "Design",
      services: [
        { logo: "design-logo", name: "Graphic Design", description: "Graphic design involves integrating visual elements and creativity to effectively convey messages and concepts across different mediums, including print and multimedia." },
        { logo: "ux-logo", name: "UI/UX Design", description: "UI/UX design entails crafting intuitive and visually captivating interfaces that elevate user interactions and enhance the overall experience across digital platforms and products." },
        { logo: "logo-logo", name: "Logo Design", description: "Brand identity involves developing a unified visual and conceptual structure to effectively communicate a brand's values, personality, and offerings, ensuring consistency across all channels." }
      ]
    },
    development: {
      tab: "Development",
      services: [
        {
          logo: "web-logo",
          name: "Web Development",
          description: "Web development encompasses the creation and upkeep of websites and web applications, covering both front-end (client-side) and back-end (server-side) aspects."
        },
        { logo: "app-logo", name: "App Development", description: "App development involves crafting software solutions across various platforms to meet specific user requirements and elevate digital experiences." },
        { logo: "software-logo", name: "Software Development", description: "Software development encompasses the design, coding, testing, and maintenance of computer programs, aimed at meeting user needs and efficiently addressing complex problems." }
      ]
    }
  };

  // Get data based on active tab
  const activeServices = servicesData[activeTab].services;

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="mt-8 text-gray-100 text-center">
          <h3 className="text-4xl font-semibold">
            Popular <span className="text-cyan-600">Services</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">
            Strategic thinker with a knack for problem-solving and adaptable to dynamic environments.
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className={`tab-box ${activeTab === "development" ? "active-tab" : ""}`}>
              <button
                onClick={() => handleTabChange("development")}
                className={`mx-2 text-gray-300 focus:outline-none ${activeTab === "development" ? "text-white font-bold" : ""}`}
              >
                Development
              </button>
            </div>
            <div className={`tab-box ${activeTab === "design" ? "active-tab" : ""}`}>
              <button
                onClick={() => handleTabChange("design")}
                className={`mx-2 text-gray-300 focus:outline-none ${activeTab === "design" ? "text-white font-bold" : ""}`}
              >
                Design
              </button>
            </div>
          </div>
          <div className="mt-16 max-w-5xl mx-auto flex flex-wrap justify-center">
            {activeServices.map((service, index) => (
              <div key={index} className="service-container bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center shadow-lg mb-8">
                <div className="icon-container">
                  <div className="icon-circle">
                    {service.logo === 'web-logo' && <FaCode size={36} />}
                    {service.logo === 'app-logo' && <FaMobileAlt size={36} />}
                    {service.logo === 'software-logo' && <FaLaptopCode size={36} />}
                    {service.logo === 'design-logo' && <FaPaintBrush size={36} />}
                    {service.logo === 'logo-logo' && <FaPencilAlt size={36} />}
                    {service.logo === 'ux-logo' && <FaSketch size={36} />}
                  </div>
                </div>
                <div className="text-center mb-4 mt-6 text-2xl font-semibold">
                  <h2>{service.name}</h2>
                </div>
                <p style={{ fontSize: '15px' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
