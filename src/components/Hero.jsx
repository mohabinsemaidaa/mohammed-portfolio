import React from 'react'
import ThreeScene from './ThreeScene'

export default function Hero() {
  return (
    <header className="relative min-h-[72vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <ThreeScene />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Mohammed Bin Semaidaa</h1>
            <p className="text-lg text-muted mt-3">Student & Developer</p>
            <p className="mt-6 text-muted max-w-xl">Building data-driven and AI-powered solutions — ETL, ML, automation and full-stack projects.</p>
            <div className="mt-8">
              <a href="#projects" className="btn-primary inline-block">View Projects</a>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="three-hidden-mobile" />
          </div>
        </div>
      </div>
    </header>
  )
}
