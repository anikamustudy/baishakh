import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb 
        pageName="About Bimal Gyawali"
        description="He is an Electrical Engineer specializing in the Control and Protection of hydropower plants, currently leading the electrical operations at the Kaligandaki 'A' Hydropower Plant. His expertise encompasses designing, implementing, and maintaining advanced control systems using PLCs, SCADA, DCS, and renewable energy technologies. He has extensive experience with ABB-based DCS and SCADA systems, ABB protection relays and excitation systems, Siemens PLCs, and WAGO field bus couplers and I/O modules. With a solid foundation in electrical engineering, he is passionate about integrating innovative technologies to enhance the efficiency, reliability, and safety of hydropower generation, contributing to sustainable energy solutions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
