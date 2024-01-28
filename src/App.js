// App.js

import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects'

const App = () => {
  const projects = [
    {
      name: 'Mars Rover App',
      githubLink: 'https://github.com/Izzy-2023/seir-seal-project1',
      deployedLink: 'https://seir-seal-project1.vercel.app/',
      image: 'https://i.imgur.com/rlWEtDb.png'
    },
    {
      name: 'Izzy Properties Inc',
      githubLink: 'https://github.com/Izzy-2023/seir-seal-unit2-week4-project2',
      deployedLink: 'https://project2-app.onrender.com/properties',
      image: 'https://i.imgur.com/Uv7JU4f.png'
      
    },
    // Add more projects as needed
  ];
  const links = [
    { name: 'GitHub', url: 'https://github.com/Izzy-2023' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/izzy-zinxhirija/' },
    // Add more links as needed
  ];
  
  return (
    <div>
      <Header links={links} />
      <Projects projects={projects} />
      {/* Add your other components/content here */}
    </div>
  );
};

export default App;
