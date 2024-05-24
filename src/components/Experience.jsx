import React from "react";
import { FaArrowRight } from "react-icons/fa";
import mern1 from "../assets/images/mern.png";
import react_img from "../assets/images/react.png";

const Experience = () => {
    const experience = [
        {
            name: "React Js Intern",
            company: "NaN LogicalNanlogical Consultancy Services Pvt. Ltd.,",
            period: "May 2021 to Oct 2021",
            address: "Chennai, India",
            website: "fortunesoft",
            logo: <img src={react_img} style={{ width: "75%", height: "65%", objectFit: "cover" }} />
        },
        {
            name: "Software Engineer",
            company: "Fortunesoft",
            period: "Oct 2021 to Mar 2024",
            address: "Banglore, India",
            website: "fortunesoft",
            logo: <img src={mern1} style={{ width: "100%", height: "70%", objectFit: "cover" }} />
        },
        {
            name: "Software Engineer",
            company: "Infoskies",
            period: "April 2024 to Present",
            address: "Banglore, India",
            website: "fortunesoft",
            logo: <img src={mern1} style={{ width: "100%", height: "70%", objectFit: "cover" }} />
        }
    ];
    return (
        <section id="experience" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Experience</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">
                    Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system.
                </p>
                <div className="mt-16 max-w-5xl mx-auto flex flex-wrap justify-center">
                    <div>
                        {experience.map((exp, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-center mb-4 mx-4 bg-gray-900 p-6 rounded-lg space-y-4 sm:space-y-0 sm:justify-between transition duration-300 hover:bg-rgb-47-64-89">
                                <div className="text-xl font-bold sm:mr-4">
                                    <div className="px-4 py-4 bg-gray-800 rounded">{exp.period}</div> {/* Added padding here */}
                                </div>
                                <div className="w-36 h-36 flex items-center justify-center text-white rounded-full mb-2 mx-8">
                                    {exp.logo}
                                </div>
                                <div className="flex flex-col justify-center ml-4 sm:ml-0">
                                    <div className="text-xl font-bold mb-2 mr-4">{exp.name}</div> {/* Added margin right */}
                                    <div className="text-gray-300 mr-4">{exp.address}</div> {/* Added margin right */}
                                </div>
                                <div className="ml-4 sm:ml-0">
                                    <a href={`https://${exp.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-white no-underline">
                                        <FaArrowRight className="mr-2" />
                                        <span>Go To Website</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
