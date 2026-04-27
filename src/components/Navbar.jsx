import { div } from "framer-motion/client";
import React, { useState } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-800 text-white relative">
        <div className="flex justify-between items-center px-5 max-w-[1400px] mx-auto py-2 h-20">
          <h1 className="text-3xl font-bold">Amiri</h1>
          <nav className="hidden lg:block">
            <ul className="flex gap-10 items-center">
              <li className="active:text-purple-600 visited:text-orange-400 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="active:text-purple-600 visited:text-orange-400 cursor-pointer">
                <Link to="/about">About Me</Link>
              </li>
              <li className="active:text-purple-600 visited:text-orange-400 cursor-pointer">
                <Link to="/service"> Services</Link>
              </li>
              <li className="active:text-purple-600 visited:text-orange-400 cursor-pointer">
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </nav>
          <img
            src="/images/menu.png"
            alt=""
            className="w-9 h-5 invert lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <a
            href="/cv.pdf"download
            className="hidden md:block w-auto h-10 bg-violet-400 text-white rounded-full px-10 hover:bg-orange-300 cursor-pointer py-2"
          >
            Download CV
          </a>
        </div>
        {/* ================================ menu mobile ================================== */}
        {open && (
          <div>
            <div>
              <div className="w-full h-screen fixed bg-zinc-900  opacity-80 top-0"></div>
              <nav className="absolute bg-gray-900 h-screen w-[350px] top-0 bottom-0 fixed z-50 px-5 py-10 flex flex-col gap-8 ">
                <div className="flex justify-between">
                  <span className="text-3xl font-bold">Amiri</span>
                  <div
                    className="border-1 border-black w-[50px] h-[50px] flex justify-center items-center rounded-lg active:bg-purple-700 cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    <i class="fa-solid fa-xmark "></i>
                  </div>
                </div>
                <ul className="flex flex-col gap-5 text-xl">
                  <li className="active:text-purple-600 visited:text-orange-400 cursor-pointer">
                    <Link to="/" onClick={()=> setOpen(false)}>Home</Link>
                  </li>
                  <li className="active:text-purple-600 visited:text-orange-400 cursor-pointer">
                    <Link to="/about" onClick={()=> setOpen(false)}>About Me</Link>
                  </li>
                  <li className="active:text-purple-600 visited:text-orange-400 cursor-pointer">
                    <Link to="/service" onClick={()=> setOpen(false)} > Services</Link>
                  </li>
                  <li className="active:text-purple-600 visited:text-orange-400 cursor-pointer">
                    <Link to="/contact" onClick={()=> setOpen(false)}>Contact Me</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
