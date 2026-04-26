import React from "react";

function AboutMe() {
  return (
    <>
      <div>
        <div className=" bg-gray-900 overflow-x-hidden py-20">
          <div className="relative  text-white px-5 max-w-[1400px] mx-auto">
            {/* =========================  hsapes ================================ */}
            <div className="flex gap-5 absolute -top-10 lg:-top-5 lg:-right-40 lg:gap-10  ">
              <div className="bg-gradient-to-b from-rose-300 to-gray-900 w-[25vw] h-[25vw] rounded-full"></div>
              <div className="flex flex-col mt-15 gap-10">
                <div className="bg-gradient-to-b from-green-400 to-gray-900 w-[5vw] h-[5vw] rounded-full"></div>
                <div className="bg-gradient-to-b from-orange-300 to-gray-900 w-[10vw] h-[10vw] rounded-full"></div>
              </div>
            </div>
            <div className=" flex flex-col  gap-10 relative  z-10  md:text-center md:w-[70vw] mx-auto py-20 ">
              <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-6xl font-bold">About Me</h1>
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

        <div className="py-20 px-5">
          {/* picture */}
          <div className="max-w-[1400px] mx-auto lg:grid lg:grid-cols-2">
            <div className="relative">
              <div className="bg-red-500  w-[40vw] h-[40vw] xl:w-[30vw] xl:h-[30vw] rounded-full absolute -z-10"></div>
              <img
                src="./images/NasirAhmadpicture.png "
                className=" object-contain w-[50vw] h-[55ve] "
                alt="mypicture"
              />
            </div>
            <div>
              <div className="flex flex-col gap-5 mb-10 ">
                <span className="text-2xl font-semibold text-orange-400 lg:text-4xl xl:text-5xl">
                  Hi there, I am{" "}
                </span>
                <h1 className="text-4xl font-bold lg:text-6xl xl:text-8xl ">
                  Nasir Ahmad
                </h1>
                <p className="text-gray-700 lg:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quam atque, repudiandae ipsa minus placeat
                  inventore, iste deserunt consectetur nesciunt beatae soluta
                  ipsum. Optio explicabo obcaecati quae incidunt, a quos
                  corporis? Atque incidunt accusamus reprehenderit suscipit illo
                  iusto labore dolore, culpa ad expedita laborum autem impedit
                  quibusdam ducimus. Nobis nesciunt adipisci cupiditate.
                  Corrupti veniam reiciendis, tenetur officiis culpa suscipit
                  debitis voluptatibus obcaecati aspernatur.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start gap-5 ">
                <span className=" text-3xl font-semibold lg:text-4xl">
                  My Interest
                </span>
                <div className=" grid grid-cols-1 gap-10 justify-center md:grid md:grid-cols-2  md:gap-x-20">
                  <div className="flex flex-col gap-1 items-center md:flex-row">
                    <div className="bg-green-500 p-5 rounded-full mr-5"><i class="fa-solid fa-laptop text-2xl md:text-4xl justify-center items-center"></i></div>
                    <h1 className="text-lg font-semibold text-gra">
                      Graphick Designer
                    </h1>
                  </div>
                  <div className="flex gap-1 flex-col items-center md:flex-row"> 
                    <div className="bg-yellow-600 p-5 rounded-full mr-5"><i class="fa-solid fa-laptop text-2xl md:text-4xl"></i></div>
                    <h1 className="text-lg font-semibold text-gra">
                      UX/UI Designer
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1  items-center md:flex-row">
                    <div className="bg-yellow-600 p-5 rounded-full mr-5"><i class="fa-solid fa-camera text-2xl md:text-4xl "></i></div>
                    <h1 className="text-lg font-semibold text-gra">
                      Photography
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1 items-center md:flex-row">
                    <div  className="bg-green-500 p-5 rounded-full mr-5"><i class="fa-solid fa-video text-2xl md:text-4xl  justify-center items-center "></i></div>
                    <h1 className="text-lg font-semibold text-gra">
                      Videography
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
