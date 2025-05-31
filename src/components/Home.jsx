import React from 'react'
import bg1 from '../assets/bg1.jpg'
import { Typewriter } from 'react-simple-typewriter'



const Home = () => {
  return (
    <div id='home'>
        <div className='w-full text-center bg1' >
          
          <h1 className='text-3xl bg1h'> <Typewriter
        words={["Hi, I'm Ghulam Mustafa"]}
        loop={0}           // play once; change to 0 for infinite
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      /></h1>
          <h2>MERN Stack Developer</h2>
         <div className='flex gap-3 mt-2'>
           <button className=' border p-2 rounded-xl text-sm bg-yellow-300 text-black cursor-pointer hover:bg-transparent hover:text-yellow-300 '><span>View Projects</span></button>
          <button className=' border hover:bg-yellow-300 hover:text-black p-2 rounded-xl text-sm '><span>Contact</span></button>
         </div>
          
          
        </div>
       

         
        
    </div>
  )
}

export default Home