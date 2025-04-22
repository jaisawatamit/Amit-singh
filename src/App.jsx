import React from 'react'
import NavBarMain from './componants/navbar/NavBarMain'
import HeroMain from './componants/heroSection/HeroMain'
import HeroGradient from './componants/heroSection/HeroGradient'
import SubHeroSection from './componants/heroSection/SubHeroSection'
import AboutMeMain from './componants/aboutSection/AboutMeMain'
import SkillsMain from './componants/skillsSection/SkillsMain'
import SubSkills from './componants/skillsSection/SubSkills'
// import ExperienceMain from './componants/experienceSection/ExperienceMain'
import ProjectsMain from './componants/projectsSection/ProjectsMain'
import ContactMeMain from './componants/contactMeSection/ContactMeMain'
import FooterMain from './componants/footer/FooterMain'





function App() {
  return (
    <div className='font-body'>
      
     <NavBarMain/>
     <HeroMain/>
     <HeroGradient/>
     <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
    <SubSkills/>
    {/* <ExperienceMain/> */}
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
    </div>
  )
}

export default App
