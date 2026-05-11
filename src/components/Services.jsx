import React from "react";
import { Link } from "react-router-dom";
// px-5 my-25 md:flex md:gap-20 lg:flex lg:justify-center
function Services() {
  return (
    <>
      <div className="">
        <div className="max-w-[1400px] flex flex-col md:flex-row md:justify-center md:items-center md:gap-5 mx-auto px-5 mb-10">
          <div className="flex flex-col gap-10 mb-30 ">
            <span className="text-lg text-yellow-600">Service</span>
            <h1 className="text-5xl font-bold ">
              Those things I can do for mhy client
            </h1>
            <p className="text-lg text-gray-600">
              I provide modern and responsive web development services focused
              <br />
              on creating fast, user-friendly, and visually appealing websites.
              <br />
              My goal is to deliver high-quality digital solutions that help
              <br />
              businesses and individuals grow online.
            </p>
            <button className="w-auto h-16 border-3 rounded-full bg-violet-400 border-violet-400 text-white text-lg active:bg-orange-300 active:border-orange-300  md:w-50 cursor-pointer">
              <Link to="/Service">Service</Link>
            </button>
          </div>

          {/* =================== cart ========================= */}
          <div className=" flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-5">
            <div className="flex flex-col gap-y-5 rounded-3xl w-auto p-5  duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.6)]  bg-white ">
              <div className="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center ">
                <i class="fa-solid fa-pencil-ruler"></i>
              </div>
              <h1 className="text-3xl font-bold">Product Design</h1>
              <p className="text-lg text-gray-600">
                Creating modern and creative product designs focused on
                usability, clean layout, and user satisfaction.
              </p>
            </div>
            <div className="flex flex-col gap-y-5 rounded-3xl w-auto p-5  duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.6)] bg-white">
              <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center ">
                <i class="fa-solid fa-tag"></i>
              </div>
              <h1 className="text-3xl font-bold">Brand Identity</h1>
              <p className="text-lg text-gray-600">
                Building unique brand identities that help businesses stand out
                and connect with their audience.
              </p>
            </div>
            <div className="flex flex-col gap-y-5 rounded-3xl w-auto p-5  duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.6)] bg-white ">
              <div className="bg-green-400 rounded-full w-10 h-10 flex items-center justify-center ">
                <i class="fa-solid fa-laptop"></i>
              </div>
              <h1 className="text-3xl font-bold">UI/UX Design</h1>
              <p className="text-lg text-gray-600">
                Designing responsive and user-friendly interfaces that provide
                smooth and engaging user experiences.
              </p>
            </div>
            <div className="flex flex-col gap-y-5 rounded-3xl w-auto p-5  duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.6)] bg-white ">
              <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center ">
                <i class="fas fa-gear"></i>
              </div>
              <h1 className="text-3xl font-bold">Branding</h1>
              <p className="text-lg text-gray-600">
                Helping brands grow through creative strategies, visual
                identity, and consistent digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
