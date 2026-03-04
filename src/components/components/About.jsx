import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';
import {styles} from '../../styles'
import {services} from '../../constants'
import {fadeIn, textVariant} from '../../utils/motion'
import { p } from 'framer-motion/client';
import { SectionWrapper } from '../../hoc';

const ServiceCard =({index, title, icon})=>{
  return (
    <Tilt className="xs:w-[250px] w-[200px] mx-2.5" >
      <motion.div
        variants ={ fadeIn("right","spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] border-1 shadow-card'
        >
         <div
         options={{
          max:45,
          scale:1,
          speed:450
         }}
         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
         >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-semibold">{title}</h3>
         </div>
      </motion.div>
    </Tilt>
    
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-yellow-300 text-3xl font-medium'>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
     <motion.p variants={fadeIn("", " ", 0.1, 1)}
     className='mt-4 text-secondary text-[20px] '>
      Software-focused Electronics and Communication Engineering (ECE)
       student with a strong foundation in both core electronics and 
       modern web technologies. Skilled in Full-Stack development using
        the MERN stack (MongoDB, Express.js, React, Node.js), with hands-on
         experience building responsive frontends and scalable backend systems. 
         Proficient in Python and Java, with a focus on writing clean, efficient,
          and maintainable code. Passionate about leveraging software-driven 
          solutions to solve real-world problems and creating seamless end-to-end user experiences.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>
        (<ServiceCard key={service.title} index={index} {...service} />))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")