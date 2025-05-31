import React, { useState, useEffect } from 'react';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'Wordpress', value: 90 },
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 85 },
  { name: 'JavaScript', value: 70 },
  { name: 'Tailwind', value: 70 },
  { name: 'React', value: 70 },
  { name: 'Nodejs & Expressjs', value: 60 },
  { name: 'MySQL', value: 70 },
  { name: 'MongoDB', value: 70 },
  { name: 'Git & GitHub', value: 70 },


];

const Skills = () => {
  const [percentages, setPercentages] = useState(skills.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentages(prev =>
        prev.map((val, i) =>
          val < skills[i].value ? val + 1 : val
        )
      );
    }, 20); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='section-2' id='skills'>
      <div className='flex justify-center '>
        <h1 className='text-3xl mb-6 mb-[50px] mt-[50px]'>Skills</h1>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-10 justify-items-center mb-[50px]'>
        {skills.map((skill, index) => (
          <div key={index} className='w-28'>
            <CircularProgressbar
              value={percentages[index]}
              text={`${percentages[index]}%`}
              styles={buildStyles({
                pathColor: '#22d3ee', // yellow-400
                textColor: 'white',
                trailColor: '#1f2937', // gray-800
                textSize: '16px',
              })}
            />
            <p className='text-center mt-2'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
