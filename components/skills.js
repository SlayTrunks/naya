import React from 'react';

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-[#CAC7C7]">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-4 border border-gray-600 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">HTML</h2>
          <p className="text-lg">Proficient in HTML5</p>
        </div>
        <div className="p-4 border border-gray-600 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">CSS</h2>
          <p className="text-lg">Skilled in CSS3 and CSS frameworks like Tailwind CSS</p>
        </div>
        <div className="p-4 border border-gray-600 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">JavaScript</h2>
          <p className="text-lg">Experience in JavaScript and modern frameworks like React and Next</p>
        </div>
        <div className="p-4 border border-gray-600 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Node.js</h2>
          <p className="text-lg">Proficient in building server-side applications using Node.js and Express.js</p>
        </div>
        <div className="p-4 border border-gray-600 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Database</h2>
          <p className="text-lg">Familiar with   NoSQL database like mongoDb</p>
        </div>
        <div className="p-4 border border-gray-600 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Git</h2>
          <p className="text-lg">Experience in version control with Git and GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
