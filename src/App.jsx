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
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <section id="about" className="py-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About</h2>
              <p className="text-muted leading-relaxed">
                I am a student at Häme University of Applied Sciences studying software development and machine learning.
                I build data-driven apps, ETL pipelines and ML models. I was born to a Finnish mother and Yemeni father and I enjoy
                creating efficient software solutions and learning new technologies.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/src/assets/avatar.jpg" alt="Mohammed" className="w-40 h-40 rounded-full object-cover ring-2 ring-accent shadow-lg" />
            </div>
          </div>
        </section>

        <section id="skills" className="py-10">
          <Skills />
        </section>

        <section id="projects" className="py-14">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <Projects />
        </section>

        <section id="contact" className="py-14">
          <Contact />
        </section>
      </main>

      <footer className="mt-16 py-8 text-center text-muted">
        © {new Date().getFullYear()} Mohammed Bin Semaidaa
      </footer>
    </div>
  )
}
