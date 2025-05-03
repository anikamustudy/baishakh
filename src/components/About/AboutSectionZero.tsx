"use client"
import Image from "next/image";

import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionZero = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        
          <div className="-mx-4 flex flex-wrap items-center">
     
              <SectionTitle 
                title="About Bimal Gyawali"
                paragraph="I am an Electrical Engineer specializing in the Control and Protection of hydropower plants, currently leading the electrical operations at the Kaligandaki 'A' Hydropower Plant. My expertise encompasses designing, implementing, and maintaining advanced control systems using PLCs, SCADA, DCS, and renewable energy technologies. I have extensive experience with ABB-based DCS and SCADA systems, ABB protection relays and excitation systems, Siemens PLCs, and WAGO field bus couplers and I/O modules. With a solid foundation in electrical engineering, I am passionate about integrating innovative technologies to enhance the efficiency, reliability, and safety of hydropower generation, contributing to sustainable energy solutions."
            
                mb="44px"
              />
              
 




            <div className="w-full px-4 lg:w-1/2">


            <div >
            <motion.div
  className="relative mx-auto aspect-square max-w-[500px] lg:mr-0"
  initial={{ containIntrinsicInlineSize: "0 0 0px rgba(0, 255, 255, 0.4)" }}
  animate={{
    containIntrinsicInlineSize: [
      "0 0 30px rgba(0, 255, 255, 0.4)",
      "0 0 30px rgba(0, 255, 255, 0.7)",
      "0 0 30px rgba(0, 255, 255, 0.4)",
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/images/about/about-me.png"
    alt="about-image"
    fill
    className="rounded-full border border-cyan-400 drop-shadow-lg dark:hidden"
  />
  <Image
    src="/images/about/about-me.png"
    alt="skill-image"
    fill
    className="hidden rounded-full border border-cyan-400 drop-shadow-lg dark:block"
  />
</motion.div>


    </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionZero;
