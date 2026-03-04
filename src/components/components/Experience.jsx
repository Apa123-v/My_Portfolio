import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../../styles'
import {experiences} from '../../constants'
import { SectionWrapper } from '../../hoc';
import { textVariant } from '../../utils/motion';
import { div, li } from 'framer-motion/client';

const ExperienceCard =({experience})=>
 ( <VerticalTimelineElement
  contentStyle={{background:"#1d1836", color:"#fff"}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experience.date}
  iconStyle={{ background: experience.iconBg}}
  icon={
<div className='w-full h-full flex justify-center items-center'>
  <img src={experience.icon} alt={experience.title} className='w-[60%] h-[60%] object-contain'/>
</div>
  }
  >
   <div>
       <h3 className='text-white text-[25px] font-bold'>{experience.title}</h3>
    
   </div>
   <ul>
    {experience.points.map((point,index)=>(
     <li key={`experience-point-${index}`} className='text-white text-[14px] ml-4 pl-1 tracking-wider'>{point}</li>
    ))}
   </ul>

  </VerticalTimelineElement>
 )


const Experience = () => {
  return (
   <>
   <motion.div 
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
<p className='text-yellow-300 text-3xl font-medium'>WHAT I HAVE BUILD SO FAR</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
   </motion.div>

   <div className='mt-20 flex flex-col'>
    <VerticalTimeline>
       {experiences.map((experience, index)=>(
        <ExperienceCard key={index} experience={experience} />
       ))}
    </VerticalTimeline>

<motion.div 
className="mt-25 bottom-0"  
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
<p className='text-yellow-300 text-3xl font-medium'>TECHNOLOGIES I HAVE WORKED WITH</p>
        <h2 className={styles.sectionHeadText}>Tools & Technologies</h2>
   </motion.div>

   </div>
   </>
  )
}

export default SectionWrapper(Experience, "work")