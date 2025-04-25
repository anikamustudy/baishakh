"use client"
import {motion} from "framer-motion";
const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>


 <motion.div className=" text-base leading-relaxed! text-body-color md:text-lg w-full px-4  bg-auto shadow-2xl rounded-2xl p-8 max-w-3xl w-full border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > 
         

           {paragraph}
         
            </motion.div>
        {/* <p className="text-base leading-relaxed! text-body-color md:text-lg">
          {paragraph}
        </p> */}
      </div>
    </>
  );
};

export default SectionTitle;
