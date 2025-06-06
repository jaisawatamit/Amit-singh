import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function ExperienceTopLeft() {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="6" text="Months" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="3" text="Websites" />
      </div>
      <p className="text-center text-white">
        With 6 Months of experience building dynamic and user-friendly web
        applications.
      </p>
      <ExperienceInfo number="$1000" text="Max Budget" />
    </div>
  )
}

export default ExperienceTopLeft