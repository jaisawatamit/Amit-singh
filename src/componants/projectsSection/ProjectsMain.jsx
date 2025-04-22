import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProjects from './SingleProjects'
import { fadeIn } from '../../farmerMotion/variants';
import { motion } from 'framer-motion';

const projects = [
    {
      name: "IShop",
      year: "Jan2025",
      align: "right",
      image: "/images/ChatGPT Image Apr 4, 2025, 05_06_08 PM.png",
      link: "#",
    },
    {
      name: "Password Generator App",
      year: "Sept2024",
      align: "left",
      image: "/images/ChatGPT Image Apr 4, 2025, 05_39_08 PM.png",
      link: "#",
    },
    {
      name: "Uber-Clone",
      year: "March 2025",
      align: "right",
      image: "/images/ChatGPT Image Apr 4, 2025, 05_19_10 PM.png",
      link: "https://uber-clone-frontend-wtxv.onrender.com",
    },
     {
      name: "Food-Application",
      year: "April 2025",
      align: "left",
      image: "/images/food-image.avif",
      link: "https://food-application-food-web.onrender.com",
    },
  ];

function ProjectsMain() {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
        <div>
            {projects.map((pro, index) =>{
                return <SingleProjects key={index} name={pro.name} year={pro.year} align={pro.align}  image={pro.image} link={pro.link}/>
            })}
        </div>
    </div>
  )
}

export default ProjectsMain
