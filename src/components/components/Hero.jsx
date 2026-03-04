import React from "react";
import { styles } from '../../styles'
import { ComputersCanvas } from "./canvas";
import heroBg from "../../assets/assets/herobg.png";
const Hero = () => {
  return (


    <section
      className="h-[150vh] sm:h-screen bg-cover bg-center mx-auto"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-4 h-4 rounded-full bg-[#facc15] " />
          <div className="w-1 sm:h-80 h-40 yellow-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span className="text-yellow-500">Aparna</span></h1>
          <p className={`${styles.heroSubText} text-white mt-2`}>Full-stack developer, solving real-world problems with Java & Python,
            <br></br> powered by systems thinking and an ECE foundation.</p>
        </div>

      </div>
      <ComputersCanvas />
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.dev />

          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;