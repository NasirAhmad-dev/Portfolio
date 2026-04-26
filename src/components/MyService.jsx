import React, { useState } from "react";
import Button from "./Button";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
function MyService() {
  const [activeButton, setActiveButton] = useState(null);
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                ipsa excepturi dolore optio pariatur harum illum labore
                explicabo facilis consequuntur deserunt placeat libero obcaecati
                sapiente sunt nisi officiis cumque praesentium quam totam, et ut
                impedit! Officia quod hic accusantium obcaecati est beatae
                voluptatum ab facere, ipsa explicabo et laborum doloremque?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              fugiat est culpa quos fugit ipsum? Rem, soluta quis modi animi
              ullam, tempore quo excepturi eaque a ipsa autem rerum similique.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[90px_1fr_1fr] md:items-center md:gap-5 ">
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
              <h1 className=" text-4xl font-bold">Product Designn</h1>
              <p className="text-gray-800 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni ipsam esse obcaecati distinctio temporibus illo error iure
                amet vero dolorum inventore laboriosam, et ipsa? Recusandae quo
              </p>
              <Button text="See Detail" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[90px_1fr_1fr] md:items-center md:gap-5">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni ipsam esse obcaecati distinctio temporibus illo error iure
                amet vero dolorum inventore laboriosam, et ipsa? Recusandae quo
              </p>
              <Button text="See Detail" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[90px_1fr_1fr] md:gap-5 md:items-center">
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
            <div className="flex flex-col gap-5">
              <h1 className=" text-4xl font-bold">Brand Identity</h1>
              <p className="text-gray-800 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni ipsam esse obcaecati distinctio temporibus illo error iure
                amet vero dolorum inventore laboriosam, et ipsa? Recusandae quo
              </p>
              <Button text="See Detail" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[90px_1fr_1fr] md:gap-5 md:items-center">
            <motion.img
              whileHover={{ scale: 1.09, rotate: 5 }}
              transition={{ duration: 0.3 }}
              src="./images/computer.jpg"
              alt="image4"
              className="md:order-1 rounded-4xl"
            />
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500">
              04.
            </span>
            <div className="flex flex-col gap-5">
              <h1 className=" text-4xl font-bold">UI/UX Design</h1>
              <p className="text-gray-800 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                magni ipsam esse obcaecati distinctio temporibus illo error iure
                amet vero dolorum inventore laboriosam, et ipsa? Recusandae quo
              </p>
              <Button text="See Detail" />
            </div>
          </div>
        </div>

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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sit ipsa excepturi dolore optio pariatur harum illum labore
                    explicabo facilis consequuntur deserunt placeat libero
                    obcaecati sapiente sunt nisi officiis cumque praesentium
                    quam totam, et ut impedit! Officia quod hic accusantium
                    obcaecati est beatae voluptatum ab facere, ipsa explicabo et
                    laborum doloremque?
                  </p>
                  <div className="flex flex-col gap-5 text-xl mt-5 md:flex-row md:px-10">
                    <Link to="/Contact">
                      <button className="w-auto h-15 border-3 rounded-full border-violet-500 bg-violet-500 text-white active:bg-orange-300 active:border-orange-300 md:px-5 lg:px-10 md:text-lg md:h-14 cursor-pointer">
                        Contact Me
                      </button>
                    </Link>
                    <a
                      href="/cv.pdf"
                      download
                      className="w-auto h-15 border-3 rounded-full border-violet-500 text-violet-500  active:bg-orange-300 active:text-white active:border-orange-300 md:px-5 lg:px-10 md:text-lg md:h-14 py-3 cursor-pointer"
                    >
                      Download CV
                    </a>
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
      </div>
    </>
  );
}

export default MyService;
