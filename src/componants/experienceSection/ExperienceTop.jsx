import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddel from './ExperienceTopMiddel'
import ExperienceTopRight from './ExperienceTopRight'

function ExperienceTop() {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
        <ExperienceTopLeft/>
        <ExperienceTopMiddel/>
        <ExperienceTopRight/>
    </div>
  )
}

export default ExperienceTop