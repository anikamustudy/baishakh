import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "17.5 kV Vacuum Circuit Breaker Passes All FAT Criteria at Schneider Electric",
    paragraph:
      "Factory visit and acceptance tests of 17.5 kV MV Panel Vacuum Circuit Breaker were performed successfully at Schneider Electric. The FAT included the Circuit Breaker timing test, Insulation Resistance test, Contact Resistance Measurement Test, High Voltage withstand Test, among others.The outcomes were promising, with the tested Vacuum Circuit Breaker meeting all our satisfaction criteria. Thanks to all ",

    image: "/images/blog/blog-01.png",
    author: {
      name: "Bimal Gyawali",
      image: "/images/blog/blog-01.png",
      designation: "Electrical Engineer",
    },
    tags: [" "],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Substation Design and SLD Preparation",
    paragraph:
      "Substation Design and SLD Preparation focuses on the comprehensive planning and design of an electrical substation, with particular emphasis on creating an accurate and efficient Single Line Diagram (SLD). The work involves analyzing load requirements, selecting appropriate equipment such as transformers, circuit breakers, isolators, and protection devices, and ensuring system reliability and safety through proper protection scheme design. It also includes coordination with structural and civil aspects for optimal substation layout while adhering to industry standards like IEC and IEEE. The resulting design ensures efficient power distribution, system scalability, and safe operation in line with technical and regulatory requirements.",
    image: "/images/blog/blog-02.png",
    author: {
      name: "Bimal Gyawali",
      image: "/images/blog/blog-02.png",
      designation: "Electrical Engineer",
    },
    tags: [""],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Control and Protection System Troubleshooting & Maintenance",
    paragraph:
      "Control and Protection System Troubleshooting & Maintenance focuses on identifying, analyzing, and resolving issues within the control and protection systems of electrical networks to ensure reliable and uninterrupted operation. It involves systematic diagnostics of relays, control panels, circuit breakers, wiring, and communication interfaces to detect faults or irregularities. Regular maintenance tasks such as calibration of protection relays, inspection of control logic, testing of interlocks, and verification of signal integrity are performed to enhance system performance and prevent failures. The project aims to maintain the integrity of the protection system, improve response time to faults, and ensure overall system stability and safety in compliance with operational standards.",
    image: "/images/blog/blog-03.png",
    author: {
      name: "Bimal Gyawali",
      image: "/images/blog/blog-03.png",
      designation: "Electrical Engineer",
    },
    tags: [""],
    publishDate: "2025",
  },
];
export default blogData;
