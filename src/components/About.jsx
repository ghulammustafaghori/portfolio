import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-10">About Me</h2>
        
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            Hello! I'm a passionate <span className="text-yellow-400 font-semibold">Web Developer</span> with over <span className="text-yellow-400 font-semibold">2 years of experience</span> in building modern, responsive, and functional web applications and websites.
          </p>
          
          <p>
            I specialize in both <span className="text-yellow-400 font-semibold">WordPress</span> and <span className="text-yellow-400 font-semibold">custom-coded solutions</span>, utilizing technologies such as <span className="text-yellow-400">React</span>, <span className="text-yellow-400">Node.js</span>, <span className="text-yellow-400">MongoDB</span>, <span className="text-yellow-400">MySQL</span>, <span className="text-yellow-400">Tailwind CSS</span>, and more.
          </p>

          <p>
            From complete <span className="text-yellow-400 font-semibold">hosting and domain setup</span> using platforms like <span className="text-yellow-400">Hostinger</span> and <span className="text-yellow-400">cPanel</span>, to designing pixel-perfect UIs and developing fully functional backends, I handle it all with precision.
          </p>

          <p>
            I completed a web development internship with <span className="text-yellow-400 font-semibold">URRAAN</span> in 2021 and have since worked as a freelancer on <span className="text-yellow-400 font-semibold">Fiverr</span> and with <span className="text-yellow-400 font-semibold">private software companies</span>, delivering high-quality solutions to clients globally.
          </p>

          <p>
            I'm a firm believer in <span className="text-yellow-400 font-semibold">continuous learning</span> and strive to improve my craft every day. Whether it's crafting elegant user interfaces or solving complex backend challenges, I enjoy turning ideas into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
