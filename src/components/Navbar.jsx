import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-30 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold tracking-tight">Mohammed B. Semaidaa</div>
        <div className="hidden md:flex gap-6 items-center text-muted">
          <a href="#about" className="hover:text-text">About</a>
          <a href="#skills" className="hover:text-text">Skills</a>
          <a href="#projects" className="hover:text-text">Projects</a>
          <a href="#contact" className="hover:text-text">Contact</a>
        </div>
        <div className="md:hidden text-muted">Menu</div>
      </div>
    </nav>
  )
}
