import React from "react";

function Contact() {
  return (
    <>
      <div>
        <div className=" bg-gray-900 overflow-x-hidden py-20 ">
          <div className="relative  text-white px-5 max-w-[1400px] mx-auto">
            {/* =========================  hsapes ================================ */}
            <div className="flex gap-5 absolute -top-10 lg:-top-5  lg:gap-10 lg:-right-30 ">
              <div className="bg-gradient-to-b from-rose-300 to-gray-900 w-[25vw] h-[25vw] rounded-full"></div>
              <div className="flex flex-col mt-15 gap-10">
                <div className="bg-gradient-to-b from-green-400 to-gray-900 w-[5vw] h-[5vw] rounded-full"></div>
                <div className="bg-gradient-to-b from-orange-300 to-gray-900 w-[10vw] h-[10vw] rounded-full"></div>
              </div>
            </div>
            <div className=" flex flex-col  gap-10 relative  z-10  md:text-center  mx-auto py-20 ">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Contact Me
              </h1>
              <p className="text-md text-gray-400">
                If you have any questions, project ideas, or collaboration
                requests, feel free to contact me. I am always open to
                discussing new opportunities and working on creative web
                development projects that bring value and great user
                experiences.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" max-w-[1400px] mx-auto px-5 my-20 flex flex-col  gap-10 md:grid grid-cols-2">
          <div className="bg-purple-400 flex justify-center items-end rounded-4xl ">
            <img
              src="./images/NasirAhmadpicture.png"
              alt="Myphoto"
              className="mt-10"
            />
          </div>
          <div className=" flex flex-col gap-5 overflow-x-hidden">
            <h1 className="text-5xl md:tex-5xl font-bold md:text-center">
              "Sent Message to Me, and Let's Work Together"
            </h1>
            <p className="text-gray-600 md:text-center">
              I am available for freelance work and collaboration. If you need a
              modern website, UI design, or web application, feel free to reach
              out. I will respond as soon as possible and would be happy to help
              bring your ideas to life.{" "}
            </p>
            <div className="flex items-center gap-5">
              <div className="bg-rose-400 rounded-full p-4">
                <i class="fa-solid fa-location-dot invert"></i>
              </div>
              <p className="text-2xl font-bold">
                Shahr-e-new Faizabad, 2026 Afghanistan{" "}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-rose-400 rounded-full p-4">
                <i class="fa-solid fa-phone invert"></i>
              </div>
              <p className="text-2xl font-bold">(+93)745077604</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-rose-400 rounded-full p-4">
                <i class="fa-solid fa-envelope invert"></i>
              </div>
              <p className="text-2xl font-bold">
                nasirahmadamiri77604 @gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
