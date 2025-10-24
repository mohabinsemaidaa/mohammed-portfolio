import React from 'react'

const skillGroups = [
  { title: 'Programming', items: ['Python', 'Java', 'C++', 'SQL'] },
  { title: 'Tools', items: ['Power BI', 'UiPath', 'MongoDB', 'Tableau'] },
  { title: 'Frameworks', items: ['PySpark', 'TensorFlow', 'scikit-learn'] },
]

export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="card">
            <h3 className="font-semibold mb-3">{g.title}</h3>
            <ul className="space-y-2 text-muted">
              {g.items.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center bg-surface text-accent text-sm shadow-sm">•</div>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
