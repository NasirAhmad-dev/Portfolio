import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center py-15 gap-10 mt-15  px-5 bg-gray-200 ">
        <h1 className="text-5xl font-bold text-gray-700">Amiri</h1>
        <p className="text-lg text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus ex
          repudiandae ullam eligendi omnis rem.<br/> Vitae eveniet quo impedit,
          distinctio eum numquam, tempore atque quibusdam optio ab, omnis a.
        </p>
        <div className="flex gap-10 ">

          <div className="flex justify-center items-center hover:bg-orange-300 hover:duration-300 rounded-full p-2">
            <a href="https://www.facebook.com/nasirahmad.amiri.168894" target="_blank">
            <i class="fa-brands fa-facebook-f text-3xl"></i>
            </a>
          </div>

          <div className="flex justify-center items-center hover:bg-orange-300 hover:duration-300 rounded-full p-2">
            <a href="#" target="_blank">
              <i class="fa-brands fa-instagram text-3xl "></i>
            </a>
          </div>

          <div className="flex justify-center items-center hover:bg-orange-300 hover:duration-300 rounded-full p-2">
            <a href="https://github.com/NasirAhmad-dev/portfolio.git" target="_blank">
              <i class="fa-brands fa-github text-3xl cursor-pointer "></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
