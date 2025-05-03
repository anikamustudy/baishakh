// "use client"
// import Image from "next/image";

// import SectionTitle from "../Common/SectionTitle";
// import { motion } from "framer-motion";

// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

// const AboutSectionOne = () => {
//   const List = ({ text }) => (
//     <p className="text-body-color mb-5 flex items-center text-lg font-medium">
//       <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
//         {checkIcon}
//       </span>
//       {text}
//     </p>
//   );

//   return (
//     <section id="about" className="pt-16 md:pt-20 lg:pt-28">
//       <div className="container">
//         <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
//           <div className="-mx-4 flex flex-wrap items-center">
//             <div className="w-full px-4 lg:w-1/2">
//               <SectionTitle
//                 title="Skills"
//                 paragraph=""
//                 mb="44px"
//               />

//               <div
//                 className="mb-12 max-w-[570px] lg:mb-0"
//                 data-wow-delay=".15s"
//               >
//                 <div className="mx-[-12px] flex flex-wrap">
//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Electrical Substation (AIS/GIS) Design. 80%" />
//                     <List text="Electrical Control and Protection System 85%" />
//                     <List text="Electrification Design 90%" />
//                     <List text="Solar PV System Design (On-Grid and Off-Grid) 95%" />
//                   </div>

//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Proficiency in Microsoft Office, AutoCAD, Etap 70%" />
//                     <List text="Public Speaking and Communication Skills 70%" />
//                     <List text="Teamwork and Project Management 70% "
//                     />

//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full px-4 lg:w-1/2">
//               <motion.div
//                 className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
//                 initial={{ boxShadow: "0 0 0px rgba(0, 255, 255, 0.4)" }}
//                 animate={{
//                   boxShadow: [
//                     "0 0 30px rgba(0, 255, 255, 0.4)",
//                     "0 0 30px rgba(0, 255, 255, 0.7)",
//                     "0 0 30px rgba(0, 255, 255, 0.4)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <Image
//                   src="/images/about/skill-image.png"
//                   alt="about-image"
//                   fill
//                   className="mx-auto max-w-full rounded-2xl border border-cyan-400 drop-shadow-lg dark:hidden lg:mr-0"
//                 />
//                 <Image
//                   src="/images/about/skill-image.png"
//                   alt="skill-image"
//                   fill
//                   className="mx-auto hidden max-w-full rounded-2xl border border-cyan-400 drop-shadow-lg dark:block lg:mr-0"
//                 />
//               </motion.div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSectionOne;


"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";

const skills = [
  { name: "Electrical Substation (AIS/GIS) Design", percent: 80 },
  { name: "Electrical Control and Protection System", percent: 85 },
  { name: "Electrification Design", percent: 90 },
  { name: "Solar PV System Design (On-Grid and Off-Grid)", percent: 95 },
  { name: "Proficiency in Microsoft Office, AutoCAD, Etap", percent: 70 },
  { name: "Public Speaking and Communication Skills", percent: 70 },
  { name: "Teamwork and Project Management", percent: 70 },
];

const SkillBar = ({ name, percent }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-white">
          {name}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-white">
          {/* {percent}% */}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="bg-cyan-300 h-3 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Skills Section */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title="Skills" paragraph="" mb="44px" />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2"
                    >
                      <SkillBar name={skill.name} percent={skill.percent} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                initial={{ boxShadow: "0 0 0px rgba(0, 255, 255, 0.4)" }}
                animate={{
                  boxShadow: [
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
                  src="/images/about/skill-image.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-2xl border border-cyan-400 drop-shadow-lg dark:hidden lg:mr-0"
                />
                <Image
                  src="/images/about/skill-image.png"
                  alt="skill-image"
                  fill
                  className="mx-auto hidden max-w-full rounded-2xl border border-cyan-400 drop-shadow-lg dark:block lg:mr-0"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
