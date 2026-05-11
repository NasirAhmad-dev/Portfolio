import React from "react";

function Skills() {
  return (
    <>
      <div className="bg-gray-900 text-white h-[1100px] sm:h-[850px] md:h-[700px]">
        <div className="  max-w-[1400px] md:justify-center overflow-hidden mx-auto px-5 flex flex-col  gap-5">
          {/* =================== shape ================================= */}
          <div className="mt-10 lg:relative lg:-right-200 lg:pb-0">
            <div className="bg-gradient-to-b from-rose-300  to-gray-900  w-100 h-100 rounded-full  "></div>
            <div className="ml-120 -mt-50 ">
              <div className="bg-gradient-to-t from-gray-800 to-green-300 w-25 h-25 rounded-full mt-10 "></div>
              <div className="bg-gradient-to-b from-yellow-600 to-gray-800 w-50 h-50 rounded-full mt-10 "></div>
            </div>
          </div>
          {/* ============================ text ========================= */}
          <div className="flex flex-col gap-20 relative -top-130 md:relative md:-top-135 lg:mb-0 ">
            <div className="md:text-center">
              <div className=" text-white flex flex-col gap-5 relative">
                <span className="text-orange-300 text-lg">Skill</span>
                <h1 className="text-4xl font-bold leading-tight">
                  Professional skills that I have
                </h1>
                <p className="text-gray-300 tracking-wide ">
                  I have experience working with modern web technologies and
                  creating responsive, user-friendly websites. My skills include
                  front-end development, UI/UX design, and building clean,
                  efficient, and interactive web applications that deliver great
                  user experiences.
                </p>
              </div>
            </div>
            {/* ===========================    ============================= */}
            <div className="flex flex-col  gap-8 md:grid md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <span className="text-2xl">Graghic Designer</span>
                <div className="max-w-178 h-4 bg-white  rounded-full">
                  <span className="bg-purple-600 w-80 h-4 rounded-full absolute"></span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-2xl">Photography</span>
                <div className="max-w-178 h-4 bg-white  rounded-full">
                  <span className="bg-purple-600 w-40 h-4 rounded-full absolute"></span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-2xl">UI/UX Design</span>
                <div className="max-w-178 h-4 bg-white  rounded-full">
                  <span className="bg-purple-600 w-50 h-4 rounded-full absolute"></span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-2xl">Project Manajment</span>
                <div className="max-w-178 h-4 bg-white  rounded-full relative">
                  <span className="bg-purple-600 w-70 h-4 rounded-full absolute"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
