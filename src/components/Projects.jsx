import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import img1 from '../assets/Resturantwebapp.jpg';
import img2 from '../assets/restaurant.jpg';
import img3 from '../assets/Maxesso.jpg';
import img4 from '../assets/chat.jpeg';
import img5 from '../assets/Shopskies.jpg';
import img6 from '../assets/blog.jpg';

const projects = [
   {
    title: 'Reactjs Ecommerce Website',
    description: 'A modern portfolio built with React and Tailwind CSS.',
    image: img5,
    // github: '#',
    // demo: '#',
  },
  {
    title: 'MERN Stack Food Delivery Webapp',
    description: 'A modern portfolio built with React and Tailwind CSS.',
    image: img1,
    github: '#',
    demo: '#',
  },
  {
    title: 'MERN Stack Chat Webapp using Socket.io',
    description: 'MERN stack e-commerce platform with Stripe integration.',
    image: img4,
    github: '#',
    demo: '#',
  },
  {
    title: 'Restaurant Website using Wordpess',
    description: 'Real-time chat using Socket.IO, React & Node.js.',
    image: img2,
    github: '#',
    demo: '#',
  },
  {
    title: 'Ecommerce Website using Wordpress',
    description: 'Weather updates using OpenWeather API.',
    image: img3,
    github: '#',
    demo: '#',
  },
  {
    title: 'Blogging Website using Wordpress',
    description: 'Weather updates using OpenWeather API.',
    image: img6,
    github: '#',
    demo: '#',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  return (
    <div className="py-20 px-5 bg-black text-white" id="projects">
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16 text-yellow-400"
      >
       Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
          >
        <div className="relative h-52 overflow-hidden group rounded-t-xl">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>



            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300"
                > */}
                  {/* <FaGithub className="group-hover:scale-125 transition-transform" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="group-hover:scale-125 transition-transform" />
                  Live Demo
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
