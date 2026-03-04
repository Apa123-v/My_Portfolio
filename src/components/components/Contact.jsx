import React from 'react'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";
import { styles } from '../../styles'
import { SectionWrapper } from '../../hoc'
import { slideIn } from '../../utils/motion'
import { EarthCanvas } from './canvas';

//template_78f0idz 
//service_kye5alp
//1wiqFbuTcTiXv11yo

const Contact = () => {
  const formref = useRef()
  const [form, setform] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
      const {name, value } =e.target;
      setform({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic front-end validation
    if (!form.name || !form.email || !form.message) {
      alert('Please complete all fields before sending.');
      return;
    }

    const templateParams = {
      from_name: form.name,
      to_name: "Aparna Tiwari",
      from_email: form.email, // make sure this matches your EmailJS template variable
      to_email: 'kirantiwari9984@gmail.com',
      message: form.message,
    };

    console.log('emailjs payload', templateParams);

    setLoading(true);
    emailjs
      .send('service_kye5alp', 'template_78f0idz', templateParams, '1wiqFbuTcTiXv11yo')
      .then(
        () => {
          setLoading(false);
          alert("Thanks for contacting me! I'll catch you as soon as possible.");
          setform({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS error:', error);
          alert('Something went wrong, Please try again.');
        }
      );
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden relative'>
       <div className="absolute -z-10 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full top-20 left-20" />
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] p-8 bg-black-100 rounded-2xl'>
        <p className='text-yellow-400 text-3xl font-medium'>GET IN TOUCH</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formref} onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 bg-cyan-950 p-8 rounded-2xl">
          <label className='flex flex-col'>
            <span className='text-yellow-300 font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className="bg-slate-800 py-4 px-6 text-white rounded-xl outline-none border border-transparent focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/30 transition-all duration-300"
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-yellow-300 font-medium mb-4'>Your Email</span>
            <input type="email" name="email" onChange={handleChange} placeholder='What is your email?' className="bg-slate-800 py-4 px-6 text-white rounded-xl outline-none border border-transparent focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/30 transition-all duration-300" />
          </label>
          <label className='flex flex-col'>
            <span className='text-yellow-300 font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className="bg-slate-800 py-4 px-6 text-white rounded-xl outline-none border border-transparent focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/30 transition-all duration-300"
            />
          </label>
          <button type="submit" className="relative py-3 px-8 font-bold text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/70">
            {loading ? 'Sending....' : 'Send'}
          </button>
        </form>
        <div/>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")