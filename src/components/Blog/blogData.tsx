import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Testing and Monitoring of Electrical Equipment’s",
    paragraph:
      "Accomplished testing and monitoring electrical equipment by conducting specialized tests such as Insulation Resistance Test, Contact Resistance Measurement, Winding Resistance Test, Tan-Delta Test, Circuit Breaker Timing Test, AC/DC High Voltage Withstand Test, and more ensuring optimal equipment functionality, diagnosing faults, and verifying compliance with industry standards.  ",

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
    "Involved in 11 kV to 132 kV Substation Design and Single Line Diagram (SLD) Preparation, including tasks like Project Planning, Component Selection, Design Calculations, Site Layout Planning, and more. Ensures optimal design functionality, system reliability, and compliance with industry standards through precise planning and execution.",
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
    title: "Control & Protection System Troubleshooting & Maintenance",
    paragraph:
    "Skilled in Control & Protection System Troubleshooting and Maintenance by performing tasks such as electrical schematic study, fault findings, component replacements, and system troubleshooting to ensure reliable operation, resolves issues and verifiy compliance with industry standards.",
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
