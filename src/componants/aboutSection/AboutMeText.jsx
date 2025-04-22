import React from 'react'

function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className='text-white text-justify text-xl'>
        Hey, I’m Amit — a web developer who enjoys blending creativity with logic to build seamless digital experiences. Coming from a background rooted in analytical thinking and process optimization, I bring a problem-solving approach to every project I take on. I specialize in full-stack development using the MERN stack and Next.js, creating fast, scalable, and user-friendly web applications. Whether it’s crafting intuitive frontends or setting up robust backend architectures, I’m all about writing clean, efficient code that gets the job done.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Project</button>
    </div>
  )
}

export default AboutMeText