import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Contact</h2>
      <p className="text-muted mb-6 break-words">
        Want to collaborate or see my CV? Reach me at <a className="accent" href="mailto:mohammed.binsemaidaa@student.hamk.fi">mohammed.binsemaidaa@student.hamk.fi</a>
      </p>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        <div className="card w-full">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="text-muted space-y-2">
            <li>
              <a className="accent hover:text-glow transition-colors break-words" href="https://github.com/mohammedbinsemaidaa" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="accent hover:text-glow transition-colors break-words" href="https://www.linkedin.com/in/mohammed-bin-semaidaa-a9a399321" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="accent hover:text-glow transition-colors break-words" href="/CV.pdf" target="_blank">
                Download CV
              </a>
            </li>
          </ul>
        </div>

        <div className="card w-full">
          <h4 className="font-semibold mb-3">Say hello</h4>
          <p className="text-muted break-words">I'm always open to discussing cloud computing, AI projects, or potential opportunities. Feel free to reach out!</p>
        </div>
      </div>
    </div>
  )
}