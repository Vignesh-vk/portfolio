import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "HTML",
      count: 96,
    },
    {
      logo: "logo-css3",
      level: "CSS",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "Node Js",
      count: 90,
    },
    {
      logo: "logo-react",
      level: "React Js",
      count: 95,
    },
    {
      logo: "logo-react",
      level: "React Native",
      count: 80,
    },
    {
      logo: "logo-react",
      level: "Js",
      count: 80,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          MERN stack developers value the efficient workflow
          and ease of maintenance achieved by employing a unified language (JavaScript)
          across the entire development stack.
          This strategy expedites project completion and fosters scalability,
          leading to improved productivity.
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skills?.map((skill, i) => (
              <div key={i} className="skill-container">
                <div
                  style={{
                    position: "relative",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    background: "rgb(8 145 178 / var(--tw-bg-opacity))",
                    color: "#fff",
                    minWidth: "200px",
                    maxWidth: "250px",
                    height: '150px'
                  }}
                  className="skill-box relative p-6 sm:p-10 rounded-xl"
                >
                  <div className="flex flex-col items-center justify-center h-full rounded-xl">
                    <div className="absolute top-0 left-0 w-full h-full rounded-xl"></div>
                    <div className="flex flex-col items-center justify-center absolute inset-0 rounded-xl">
                      <p className="text-lg sm:text-xl font-bold">{skill.count}%</p>
                      <p className="text-base sm:text-xl">{skill.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
