import React, { act, useState } from "react";
import { easeIn, easeInOut, easeOut, motion, scrollInfo } from "framer-motion";
function Button({text}) {
  return (
    <>
      <div>
        <a href="#">
          <motion.button 
            whileHover={{ y: [0, 10, 0] }}
            transition={{ duration: 0.4 }}
            className="h-15 w-full md:w-auto bg-purple-600 text-white text-xl rounded-full md:px-12 hover:bg-orange-300 cursor-pointer ">
            {text}
          </motion.button>
        </a>
      </div>
    </>
  );
}

export default Button;
