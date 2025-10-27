import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen text-text">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive padding */}
        <Hero />
        <section id="about" className="py-8 sm:py-12 lg:py-14"> {/* Responsive spacing */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">About</h2>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                I am a student at Häme University of Applied Sciences studying software development and machine learning.
                I build data-driven apps, ETL pipelines and ML models. I was born to a Finnish mother and Yemeni father and I enjoy
                creating efficient software solutions and learning new technologies.
              </p>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <img 
                src="/avatar.jpg" 
                alt="Mohammed" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-2 ring-accent shadow-lg" 
              />
            </div>
          </div>
        </section>

        <section id="skills" className="py-8 sm:py-10 lg:py-12">
          <Skills />
        </section>

        <section id="projects" className="py-8 sm:py-12 lg:py-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Projects</h2>
          <Projects />
        </section>

        <section id="contact" className="py-8 sm:py-12 lg:py-14">
          <Contact />
        </section>
      </main>

      <footer className="mt-8 sm:mt-12 lg:mt-16 py-6 sm:py-8 text-center text-muted text-sm sm:text-base">
        © {new Date().getFullYear()} Mohammed Bin Semaidaa
      </footer>
    </div>
  )
}