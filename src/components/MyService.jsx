import React, { useState } from "react";
import Button from "./Button";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

function MyService() {
  const [show, setShow] = useState(null);
  return (
    <>
      <div>
        <div className=" bg-gray-900 overflow-x-hidden py-20 ">
          <div className="relative  text-white px-5 max-w-[1400px] mx-auto">
            {/* =========================  hsapes ================================ */}
            <div className="flex gap-5 absolute -top-10 lg:-top-5 lg:-right-40 lg:gap-10  ">
              <div className="bg-gradient-to-b from-rose-300 to-gray-900 w-[25vw] h-[25vw] rounded-full"></div>
              <div className="flex flex-col mt-15 gap-10">
                <div className="bg-gradient-to-b from-green-400 to-gray-900 w-[5vw] h-[5vw] rounded-full"></div>
                <div className="bg-gradient-to-b from-orange-300 to-gray-900 w-[10vw] h-[10vw] rounded-full"></div>
              </div>
            </div>
            <div className=" flex flex-col  gap-10 relative  z-10  md:text-center mx-auto py-20 ">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold">
                Services
              </h1>
              <p className="text-md text-gray-400">
                I provide professional web development services focused on
                creating modern, responsive, and user-friendly websites. My goal
                is to build clean and interactive digital experiences that help
                clients grow their online presence and achieve their business
                goals.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-5 flex flex-col md:flex md:flex-col gap-20 py-30 overflow-x-hidden ">
          <div className="flex flex-col md:items-center md:text-center gap-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Those things i can do
              <br /> for my client
            </h1>
            <p className="text-gray-800 text-lg">
              I help clients build modern and responsive websites with clean
              design, smooth user experience, and high performance. My focus is
              on creating digital solutions that are both visually attractive
              and functional.{" "}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[90px_1fr_1fr] md:items-center md:gap-5 relative">
            <motion.img
              whileHover={{ scale: 1.09, rotate: 5 }}
              transition={{ duration: 0.3 }}
              src="./images/computer.jpg"
              alt="image1"
              className="md:order-1 rounded-4xl"
            />
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500  ">
              01.
            </span>
            <div className="flex flex-col gap-3 md:items-start">
              <h1 className=" text-4xl font-bold">Product Design</h1>
              <p className="text-gray-800 text-lg">
                I design user-friendly and modern digital products that focus on
                usability, simplicity, and clean visual structure. My goal is to
                create designs that solve real user problems and provide a
                smooth experience across all devices.{" "}
              </p>
              <motion.button
                onClick={() => setShow(1)}
                whileHover={{ y: [0, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="h-15 w-full md:w-auto bg-purple-600 text-white text-xl rounded-full md:px-12 hover:bg-orange-300 cursor-pointer "
              >
                See Detail
              </motion.button>
            </div>
            {show === 1 && (
              <div className="px-5 absolute z-50 top-15 sm:left-2/23 md:left-2/12 lg:left-2/8 bg-red-500">
                <div className="relative max-w-[500px] flex  items-center flex-col bg-gray-300 p-10 rounded-lg mx-auto gap-10 shadow-[0_0_10px_rgba(0,0,0,.3)]">
                  <h1 className="text-4xl font-semibold">
                    About Product Design
                  </h1>
                  <p className="text-gray-500 text-center">
                    Product design is the process of planning and creating
                    digital solutions that are both visually appealing and easy
                    to use. It focuses on understanding user needs and turning
                    them into practical, functional, and attractive interfaces
                    that improve overall user experience.{" "}
                  </p>
                  <button
                    className="bg-purple-400 rounded-md px-3 py-1 cursor-pointer text-white hover:bg-orange-400"
                    onClick={() => setShow(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* --------------------------------------------------------- */}

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[90px_1fr_1fr] md:items-center md:gap-5 relative">
            <motion.img
              whileHover={{ scale: 1.09, rotate: 5 }}
              transition={{ duration: 0.3 }}
              src="./images/computer.jpg"
              alt="image2"
              className="md:order-1 rounded-4xl"
            />
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500">
              02.
            </span>
            <div className="flex flex-col gap-5 md:items-start">
              <h1 className=" text-4xl font-bold">Brandign</h1>
              <p className="text-gray-800 text-lg">
                I help create strong and memorable brand identities that reflect
                the personality and values of a business. My focus is on
                building visual consistency, trust, and recognition across all
                platforms.{" "}
              </p>
              <motion.button
                onClick={() => setShow(2)}
                whileHover={{ y: [0, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="h-15 w-full md:w-auto bg-purple-600 text-white text-xl rounded-full md:px-12 hover:bg-orange-300 cursor-pointer "
              >
                See Detail
              </motion.button>
            </div>
            {show === 2 && (
              <div className="px-5 absolute z-50 top-15 sm:left-2/23 md:left-2/12 lg:left-2/8">
                <div className="relative max-w-[500px] flex  items-center flex-col bg-gray-300 p-10 rounded-lg mx-auto gap-10 shadow-[0_0_10px_rgba(0,0,0,.3)]">
                  <h1 className="text-4xl font-semibold">About Branding</h1>
                  <p className="text-gray-500 text-center">
                    Branding is the process of shaping how a business is seen by
                    its audience. It includes visual identity, messaging, and
                    design elements that work together to create a strong and
                    consistent image.{" "}
                  </p>
                  <button
                    className="bg-purple-400 rounded-md px-3 py-1 cursor-pointer text-white hover:bg-orange-400"
                    onClick={() => setShow(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* -------------------------------------------------------------- */}

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[90px_1fr_1fr] md:gap-5 md:items-center relative">
            <motion.img
              whileHover={{ scale: 1.09, rotate: 5 }}
              transition={{ duration: 0.3 }}
              src="./images/computer.jpg"
              alt="images3"
              className="md:order-1 rounded-4xl"
            />
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500">
              03.
            </span>
            <div className="flex flex-col gap-5 md:items-start">
              <h1 className=" text-4xl font-bold">Brand Identity</h1>
              <p className="text-gray-800 text-lg">
                I create unique and consistent brand identities that represent a
                business in a professional and memorable way. This includes
                designing visual elements such as colors, typography, and style
                that help build a strong brand presence.{" "}
              </p>
              <motion.button
                onClick={() => setShow(3)}
                whileHover={{ y: [0, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="h-15 w-full md:w-auto bg-purple-600 text-white text-xl rounded-full md:px-12 hover:bg-orange-300 cursor-pointer "
              >
                See Detail
              </motion.button>
            </div>
            {show === 3 && (
              <div className="px-5 absolute z-50 top-15 sm:left-2/23 md:left-2/12 lg:left-2/8">
                <div className="relative max-w-[500px] flex  items-center flex-col bg-gray-300 p-10 rounded-lg mx-auto gap-10 shadow-[0_0_10px_rgba(0,0,0,.3)]">
                  <h1 className="text-4xl font-semibold">
                    About Brand Identity
                  </h1>
                  <p className="text-gray-500 text-center">
                    Brand identity is the visual and emotional expression of a
                    brand. It helps businesses communicate their values and
                    build trust with their audience through consistent design
                    and presentation.{" "}
                  </p>
                  <button
                    className="bg-purple-400 rounded-md px-3 py-1 cursor-pointer text-white hover:bg-orange-400"
                    onClick={() => setShow(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ---------------------------------------------------------- */}

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[90px_1fr_1fr] md:items-center md:gap-5 relative">
            <motion.img
              whileHover={{ scale: 1.09, rotate: 5 }}
              transition={{ duration: 0.3 }}
              src="./images/computer.jpg"
              alt="image2"
              className="md:order-1 rounded-4xl"
            />
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500">
              04.
            </span>
            <div className="flex flex-col gap-5 md:items-start">
              <h1 className=" text-4xl font-bold">UI/UX Design</h1>
              <p className="text-gray-800 text-lg">
                I design user-friendly and intuitive interfaces that improve
                user experience and make digital products easy and enjoyable to
                use. My focus is on usability, accessibility, and clean modern
                design.{" "}
              </p>
              <motion.button
                onClick={() => setShow(4)}
                whileHover={{ y: [0, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="h-15 w-full md:w-auto bg-purple-600 text-white text-xl rounded-full md:px-12 hover:bg-orange-300 cursor-pointer "
              >
                See Detail
              </motion.button>
            </div>
            {show === 4 && (
              <div className="px-5 absolute z-50 top-15 sm:left-2/23 md:left-2/12 lg:left-2/8">
                <div className="relative max-w-[500px] flex  items-center flex-col bg-gray-300 p-10 rounded-lg mx-auto gap-10 shadow-[0_0_10px_rgba(0,0,0,.3)] ">
                  <h1 className="text-4xl font-semibold">About UI/UX</h1>
                  <p className="text-gray-500 text-center">
                    UI/UX design is about understanding users and creating
                    interfaces that are simple, functional, and visually
                    appealing. It focuses on improving the overall experience of
                    digital products.{" "}
                  </p>
                  <button
                    className="bg-purple-400 rounded-md px-3 py-1 cursor-pointer text-white hover:bg-orange-400"
                    onClick={() => setShow(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}

        <div>
          <div className="overflow-x-hidden py-20 px-10">
            <div className="relative bg-gray-900 overflow-x-hidden text-white p-5 max-w-[1400px] mx-auto rounded-4xl">
              {/* =========================  hsapes ================================ */}
              <div className="flex gap-5 absolute -top-0 lg:-top-5 lg:-right-40 lg:gap-10  ">
                <div className="bg-gradient-to-b from-rose-300 to-gray-900 w-[25vw] h-[25vw] rounded-full"></div>
                <div className="flex flex-col mt-15 gap-10">
                  <div className="bg-gradient-to-b from-green-400 to-gray-900 w-[5vw] h-[5vw] rounded-full"></div>
                  <div className="bg-gradient-to-b from-orange-300 to-gray-900 w-[10vw] h-[10vw] rounded-full"></div>
                </div>
              </div>
              {/* ============ text ===================== */}
              <div className="md:grid md:grid-cols-2 gap-5 md:items-center">
                <div className=" flex flex-col  gap-10 relative  z-10 py-20 lg:items-start">
                  <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-6xl font-bold">
                    Have a project
                    <br /> on your mind
                  </h1>
                  <p className="text-md text-gray-400">
                    I am available to work on new projects and collaborate with
                    clients who need modern, responsive, and high-quality web
                    solutions. Whether it's a personal website, business
                    platform, or UI design, I am ready to turn ideas into
                    reality with clean and efficient development.{" "}
                  </p>
                  <div className="flex flex-col gap-5 text-xl mt-5 md:flex-row md:px-10">
                    <button className="w-auto h-15 border-3 rounded-full border-violet-500 bg-violet-500 text-white active:bg-orange-300 active:border-orange-300 md:px-5 lg:px-10 md:text-lg md:h-14 cursor-pointer">
                      <Link to="/Contact">Contact Me</Link>
                    </button>

                    <button className="w-auto h-15  border-3 rounded-full border-violet-500 text-violet-500  active:bg-orange-300 active:text-white active:border-orange-300 md:px-5 lg:px-10 md:text-md md:h-15 cursor-pointer  text-center">
                      <a href="/cv.pdf" download>
                        Download CV
                      </a>
                    </button>
                  </div>
                </div>
                <div className="bg-purple-500 rounded-4xl flex justify-center z-10">
                  <img
                    src="./images/NasirAhmadpicture.png"
                    alt="My picture"
                    className="mt-10 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {show && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-10"></div>
        )}
      </div>
    </>
  );
}

export default MyService;
