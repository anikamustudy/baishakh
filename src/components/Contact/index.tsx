// import NewsLatterBox from "./NewsLatterBox";

// const Contact = () => {
//   return (
//     <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
//             <div
//               className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
//               data-wow-delay=".15s
//               "
//             >
//               <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
//                 Contact US
//               </h2>
//               <p className="mb-12 text-base font-medium text-body-color">
//                 We will get back to you ASAP via email.
//               </p>
//               <form>
//                 <div className="-mx-4 flex flex-wrap">
//                   <div className="w-full px-4 md:w-1/2">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="name"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your name"
//                         className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4 md:w-1/2">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="email"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Email
//                       </label>
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="message"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Message
//                       </label>
//                       <textarea
//                         name="message"
//                         rows={5}
//                         placeholder="Enter your Message"
//                         className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <NewsLatterBox />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
"use client";
import { useState } from "react";
// import NewsLatterBox from "./NewsLatterBox";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init("TvowEZOIPVwqVROmZ"); // EmailJS public key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_3oip96n", "template_k434dxk", {
        from_name: e.target.name.value,
        from_email: e.target.email.value,
        message: e.target.message.value,
      })
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                We will get back to you ASAP via email.
              </p>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit
                    </button>
                    {status && (
                      <p className="mt-4 text-sm text-green-600 dark:text-green-400" id="status">
                        {status}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Email Info Box */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">

            <div className="align-self-stretch box p-6 text-center border border-gray-200 rounded-lg shadow-md dark:bg-[#2C303B] dark:border-gray-700">
              <div className="icon mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl mx-auto">
                <span className="icon-paper-plane">✉️</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">Email Address</h3>
              <p>
                <a href="mailto:bimal.gyawali54@gmail.com" className="text-primary hover:underline">
                bimal.gyawali54@gmail.com
                </a>
              </p>
            </div>
            <br />


            <div className="align-self-stretch box p-6 text-center border border-gray-200 rounded-lg shadow-md dark:bg-[#2C303B] dark:border-gray-700">
              <div className="icon mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl mx-auto">
                <span> <FaFacebook className="text-2xl" /> </span> 

              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">Facebook</h3>
              <p>
             
                <a href="https://www.facebook.com/bimal.gyawali07" className="text-primary hover:underline">
                  Bimal Gyawali
                </a>
              </p>
            </div>

            <br/>
            <div className="align-self-stretch box p-6 text-center border border-gray-200 rounded-lg shadow-md dark:bg-[#2C303B] dark:border-gray-700">
              <div className="icon mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl mx-auto">
                <span>  <FaLinkedinIn className="text-xl" />  </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">Linkedin</h3>
              <p>
                <a href="/https://www.linkedin.com/in/bimal7/" className="text-primary hover:underline">
                  Bimal Gyawali
                </a>
              </p>
            </div>

            {/* Optional Newsletter Box */}
            <div className="mt-10">
              {/* <NewsLatterBox /> */}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
