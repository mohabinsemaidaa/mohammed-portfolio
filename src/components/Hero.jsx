import React from 'react'
import ThreeScene from './ThreeScene'

export default function Hero() {
  return (
    <header className="relative min-h-[60vh] sm:min-h-[72vh] flex items-center w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ThreeScene />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
          <div className="text-center lg:text-left w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Mohammed Bin Semaidaa
            </h1>
            <p className="text-base sm:text-lg text-muted mt-2 sm:mt-3">
              Student & Developer
            </p>
            <p className="mt-4 sm:mt-6 text-muted text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              Building data-driven and AI-powered solutions — ETL, ML, automation and full-stack projects.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start w-full">
              <a href="#projects" className="btn-primary inline-block">
                View Projects
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end three-hidden-mobile">
            {/* 3D scene placeholder for desktop */}
          </div>
        </div>
      </div>
    </header>
  )
}