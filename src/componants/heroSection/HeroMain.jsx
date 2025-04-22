import React from 'react'
import HeroText from './HeroText'
import HeroGradient from './HeroGradient'
import HeroPic from './HeroPic'

function HeroMain() {
    return (
        <div className=" pt-40 pb-16 overflow-hidden">
            <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
                <HeroText />
                <HeroPic />
            </div>
        </div>
    )
}

export default HeroMain