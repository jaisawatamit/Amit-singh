import React from 'react'
import { motion } from "framer-motion";
import { PiHexagonThin } from "react-icons/pi";
import { fadeIn } from '../../farmerMotion/variants';

function HeroPic() {
  return (
    <motion.div
      ariants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center ">
      <img
        src="/images/IMG_20240824_144528_075__2_-removebg-preview.png"
        alt="Amit Singh Jaisawat"
        className="max-h-[400px] w-auto rounded-[100%]"
      />
      <div className=" absolute z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  )
}

export default HeroPic
