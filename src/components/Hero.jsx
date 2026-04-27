import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="mbe-30">
      <div className="bg-gray-900 text-white ">
        <div className=" flex flex-col mx-5 pb-40 md:pb-0 lg:pt-50 justify-centerm max-w-[1400px] mx-auto overflow-x-hidden relative">
          {/* ===================== shape ================================ */}
          <div className="flex gap-16 lg:absolute lg:-right-40 lg:top-10 lg:gap-40">
            <div className="bg-gradient-to-b from-yellow-800  to-gray-900 w-[30vw] h-[30vw] rounded-full   "></div>
            <div className="lg:mt-40">
              <div className="bg-gradient-to-t from-gray-800 to-green-300 w-[8vw] h-[8vw]  rounded-full mt-10  "></div>
              <div className="bg-gradient-to-b from-yellow-900 to-gray-800 w-[15vw] h-[15vw]  rounded-full mt-10"></div>
            </div>
          </div>
          {/* ========================== introduce =============================== */}
          <div className="md:flex md:justify-between">
            <div className="flex flex-col gap-10 text-white px-5 z-10 md:relative md:-top-30">
              <h2 className="text-4xl text-yellow-400 lg:text-5xl">
                Hi There, I am
              </h2>
              <h1 className="text-5xl font-bold lg:text-7xl">Nasir Ahmad</h1>
              <h3 className="text-4xl">Web Developer</h3>
              <p className="text-lg text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime{" "}
                <br />
                consequatur ex explicabo nemo sunt harum error delectus.
              </p>
              {/* ====================== button =================================== */}
              <div className="flex flex-col gap-5 text-xl mt-5 md:flex-row md:px-10">
                <button className="w-auto h-15 border-3 rounded-full border-violet-500 bg-violet-500 text-white active:bg-orange-300 active:border-orange-300 md:px-5 lg:px-10 md:text-lg md:h-14 cursor-pointer">
                  <Link to="/Contact"> Contact Me</Link>
                </button>
                <button className="w-auto h-15 border-3 rounded-full border-violet-500 text-violet-500  active:bg-orange-300 active:text-white active:border-orange-300 md:px-5 lg:px-10 md:text-lg md:h-15 text-center">
                  <a href="/cv.pdf " download>Download CV</a>
                </button>
              </div>
            </div>
            <img
              src="./images/NasirAhmadpicture.png"
              alt="myphoto"
              className=" hidden md:block md:w-100 lg:w-150  lg:-mt-20  xl:w-170 object-contain lg:z-10 transition-all duration-00 "
            />
          </div>
        </div>
      </div>
      {/* ===================== score =================================== */}
      <div className="px-5 mt-30 justify-centerm max-w-[1400px] mx-auto ">
        <div className="text-4xl text-center tracking-tight leading-normal">
          <p className="text-left lg:text-center">
            "I enjoy the process of solveing problems with a clean and scalable
            solution. I have a genuine passion for pouring inspiration into
            design"
          </p>
        </div>
        <div className=" flex flex-col items-center text-center gap-y-10 my-10 md:flex-row lg:justify-center">
          <div className="">
            <h1 className="text-4xl font-bold">500+</h1>
            <h2 className="text-3xl font-bold mb-5">Client</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, saepe.
            </p>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">650+</h1>
            <h2 className="text-3xl font-bold mb-5">Project Clear</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, saepe.
            </p>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">1220</h1>
            <h2 className="text-3xl font-bold mb-5">Product Sales</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, saepe.
            </p>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">328</h1>
            <h2 className="text-3xl font-bold mb-5">Reward</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, saepe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
