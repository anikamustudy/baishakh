import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

const dotIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" className="fill-current">
    <circle cx="6" cy="6" r="4" />
  </svg>
);


const AboutSectionTwo = () =>  {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {dotIcon}
      </span>
      {text} 
 
    </p>
  );



  return (
    <>
    <section className="py-16 md:py-20 lg:py-28">
         <SectionTitle
                  title="Experience 
      "
                  paragraph=""
                  center
                />
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Electrical Engineer
                </h3>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                2021-Present
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Kaligandaki ‘A’ Hydropower Station, Nepal Electricity Authority (NEA)
                </p>
              </div>
              <div
              
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className=""> 
                  <List text="Oversee control and protection of the plant's electrical systems to ensure efficient and reliable power generation." />
                    <List text="Manage power plant control and protection systems, including supervision of protection relays and excitation systems" />
                    <List text="Integrate and maintain PLCs, HMIs, VFDs, and other critical equipment." />
                    <List text="Lead technical teams and coordinate technical activities." />
                    <List text = "Handle technical procurement, ensuring compliance with safety standards."/>
                    <List text = "Solve complex problems and make critical decisions to maintain uninterrupted operations."/>
                   
                  </div>
                  
                </div>
            
                
                </div>
              </div>
           
          
            </div>
          </div>
        </div>
    
    </section>

<section className="py-0 md:py-20 lg:py-28">
<div className="container">
<div className="-mx-4 flex flex-wrap items-center">
 <div className="w-full px-4 lg:w-1/2">
   <div
     className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
     data-wow-delay=".15s"
   >
     <Image
       src="/images/about/about-image-2.svg"
       alt="about image"
       fill
       className="drop-shadow-three dark:hidden dark:drop-shadow-none"
     />
     <Image
       src="/images/about/about-image-2-dark.svg"
       alt="about image"
       fill
       className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
     />
   </div>
 </div>

 <div className="w-full px-4 lg:w-1/2">
   <div className="max-w-[470px]">
     <div className="mb-9">
       <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
       Addon Engineer
       </h3>
       <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
       2018-2021
       </h3>
       <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
       Addon Engineering Solution –Energy Sector

       </p>
     </div>
     <div
     
     >
       <div className="mx-[-12px] flex flex-wrap">
         <div className=""> 
         <List text="Managed renewable energy projects in the energy sector." />
           <List text="Developed proposals and comprehensive reports for various projects." />
           <List text="Delivered technical presentations and demonstrations to clients." />
           <List text="Provided consulting services and technical advice for ongoing projects." />
          
         </div>
         
       </div>
   
       
       </div>
     </div>
  
 
   </div>
 </div>
</div>

</section>

<section className="py-0 md:py-20 lg:py-28">
<div className="container">
<div className="-mx-4 flex flex-wrap items-center">
 <div className="w-full px-4 lg:w-1/2">
   <div
     className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
     data-wow-delay=".15s"
   >
     <Image
       src="/images/about/about-image-2.svg"
       alt="about image"
       fill
       className="drop-shadow-three dark:hidden dark:drop-shadow-none"
     />
     <Image
       src="/images/about/about-image-2-dark.svg"
       alt="about image"
       fill
       className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
     />
   </div>
 </div>

 <div className="w-full px-4 lg:w-1/2">
   <div className="max-w-[470px]">
     <div className="mb-9">
       <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
       Electrical Engineer
       </h3>
       <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
       2017-2018
       </h3>
       <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
       Aastha Engineering Solution

       </p>
     </div>
     <div
     
     >
       <div className="mx-[-12px] flex flex-wrap">
         <div className=""> 
         <List text="Designed customized energy solutions for rural electrification and renewable energy projects." />
           <List text="Conducted solar PV design and installation training sessions." />
           <List text="Designed various solar-wind hybrid system projects, including on-grid and off-grid solar PV systems, solar water pumping, and solar street lighting." />
          
         </div>
         
       </div>
   
       
       </div>
     </div>
  
 
   </div>
 </div>
</div>

</section>
</>
  );
};

export default AboutSectionTwo;
