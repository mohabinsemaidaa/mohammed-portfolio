import React, { useState, useEffect } from 'react'
import ThreeScene from './ThreeScene'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // Hide on mobile and tablet
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <header className="relative min-h-[60vh] sm:min-h-[72vh] flex items-center">
      {/* Only show 3D scene on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 -z-10">
          <ThreeScene />
        </div>
      )}

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Mohammed Bin Semaidaa
            </h1>
            <p className="text-base sm:text-lg text-muted mt-2 sm:mt-3">
              Student & Developer
            </p>
            <p className="mt-4 sm:mt-6 text-muted text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              Building data-driven and AI-powered solutions — ETL, ML, automation and full-stack projects.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
            </div>
          </div>

          {/* Show placeholder on mobile */}
          {isMobile && (
            <div className="flex justify-center lg:hidden">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 flex items-center justify-center">
                <span className="text-white text-sm">AI & ML</span>
              </div>
            </div>
          )}

          <div className="hidden lg:flex justify-end">
            {/* 3D scene placeholder for desktop */}
          </div>
        </div>
      </div>
    </header>
  )
}