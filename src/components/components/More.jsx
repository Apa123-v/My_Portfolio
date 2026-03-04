import React from 'react'
import {motion} from 'framer-motion'
import { textVariant, fadeIn } from '../../utils/motion'
import { styles } from '../../styles'
import { SectionWrapper } from '../../hoc'
import { testimonials } from '../../constants'

const FeedbackCard = ({index, testimonial, name})=>{
  return (
    <motion.div variants={fadeIn("", "Spring", index*0.5, 0.75)}
    className="bg-[#25073A] p-6 rounded-2xl xs:w-[320px] w-full m-5">
      <p className='text-white font-medium text-[35px]'>☞</p>
      <h2 className='text-yellow-400 font-bold text-[20px]'>{name}</h2>
     <div className='my-1'>
      <p>{testimonial}</p>
      </div> 
      
     
    </motion.div>
  )
}

const More = () => {
  return (
    <div className='mt-5 bg-[#140420] rounded-[20px] '>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Know About me a little more</p>
      <h1 className={styles.sectionHeadText}>BEYOND CODE</h1>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-30 pb-14 flex flex-wrap gap-7 `}>
         {testimonials.map((testimonial, index)=>
        <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>
        )}
      </div>
    </div>
  )
}

export default More