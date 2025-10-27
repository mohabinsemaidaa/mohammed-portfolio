import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen text-text overflow-x-hidden">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero section */}
        <Hero />
        
        {/* About section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <About />
        </div>
        
        {/* Skills section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <Skills />
        </div>
        
        {/* Case Studies section */}
        <div>
          <CaseStudies />
        </div>
        
        {/* Projects section */}
        <div>
          <Projects />
        </div>
        
        {/* Contact section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <Contact />
        </div>
      </main>

      <footer className="mt-16 py-8 text-center text-muted text-sm sm:text-base">
        © {new Date().getFullYear()} Mohammed Bin Semaidaa
      </footer>
    </div>
  )
}

// Enhanced About Component
function About() {
  return (
    <section id="about" className="w-full">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
        <div className="order-2 md:order-1 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted leading-relaxed text-sm sm:text-base mb-6">
            I am a student at Häme University of Applied Sciences studying software development and machine learning. 
            I build data-driven apps, ETL pipelines and ML models. I was born to a Finnish mother and Yemeni father and I enjoy 
            creating efficient software solutions and learning new technologies.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm w-full">
            <div className="w-full">
              <h4 className="font-semibold text-accent mb-2">Data Engineering</h4>
              <ul className="text-muted space-y-1">
                <li>• ETL Pipeline Development</li>
                <li>• Power BI Dashboard Creation</li>
                <li>• Big Data Processing (PySpark)</li>
                <li>• SQL Database Design</li>
              </ul>
            </div>
            <div className="w-full">
              <h4 className="font-semibold text-accent mb-2">ML & Automation</h4>
              <ul className="text-muted space-y-1">
                <li>• Predictive Modeling</li>
                <li>• RPA with UiPath</li>
                <li>• Data Visualization</li>
                <li>• Regression Analysis</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end order-1 md:order-2 w-full">
          <img 
            src="/avatar.jpg" 
            alt="Mohammed" 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-2 ring-accent shadow-lg" 
          />
        </div>
      </div>
    </section>
  )
}