// App.js

import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects'
import MainContent from './components/Main';
import FooterContent from './components/Footer';

const App = () => {
  const projects = [
    {
      name: 'Mars Rover App',
      githubLink: 'https://github.com/Izzy-2023/seir-seal-project1',
      deployedLink: 'https://seir-seal-project1.vercel.app/',
      image: 'https://i.imgur.com/rlWEtDbm.png'
    },
    {
      name: 'Pokedex',
      githubLink: 'https://github.com/Izzy-2023/seir-seal-unit2-week3-pokedex',
      deployedLink: 'https://pokedex-p9ae.onrender.com/pokemon',
      image: 'https://i.imgur.com/IzMvw8ll.png'
    },
    {
      name: 'Izzy Properties Inc',
      githubLink: 'https://github.com/Izzy-2023/seir-seal-unit2-week4-project2',
      deployedLink: 'https://project2-app.onrender.com/properties',
      image: 'https://i.imgur.com/Uv7JU4fl.png'
      
    },
    {
      name: 'Trivia App',
      githubLink: 'https://github.com/Izzy-2023/seir-seal-unit3-jeopardy',
      deployedLink: 'https://seir-seal-unit3-jeopardy.vercel.app/',
      image: 'https://i.imgur.com/brknP1rm.png'
      
    },
    {
      name: 'E-Commerce App',
      githubLink: 'https://github.com/Izzy-2023/seir-seal-unit4-project4-frontend',
      deployedLink: 'https://seir-seal-unit4-project4-frontend.vercel.app/',
      image: 'https://i.imgur.com/rIUcRdTl.png'
      
    },
    {
      name: 'Blog App',
      githubLink: 'https://github.com/Izzy-2023/seir-seal-capstone-frontend',
      deployedLink: 'https://seir-seal-capstone-frontend.vercel.app/',
      image: 'https://i.imgur.com/yhXKnsPl.png'
      
    },
  ];
  const links = [
    { name: 'GitHub', url: 'https://github.com/Izzy-2023' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/izzy-zinxhirija/' },
    // Add more links as needed
  ];
  
  return (
    <div>
      
      <Header links={links} />
      <MainContent/>
      <Projects projects={projects} />
      <FooterContent/>
      
    </div>
  );
};

export default App;
