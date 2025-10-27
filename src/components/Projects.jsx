import React, { useEffect, useState } from 'react'
import { fetchGithubRepos } from '../utils/github'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const username = 'mohammedalsemaidaa' // Your GitHub username

  // Sample projects in case GitHub fails or you want to showcase specific ones
  const sampleProjects = [
    {
      id: 1,
      name: "ETL Pipeline System",
      description: "End-to-end ETL solution with SQL database integration and Power BI reporting",
      language: "SQL/Power BI",
      html_url: "#",
      isSample: true
    },
    {
      id: 2,
      name: "Wine Quality Predictor",
      description: "Machine learning models for predicting wine quality using regression analysis",
      language: "Python",
      html_url: "#", 
      isSample: true
    },
    {
      id: 3,
      name: "Big Data FIFA Analysis",
      description: "PySpark and MongoDB pipeline for World Cup data analysis and visualization",
      language: "Python",
      html_url: "#",
      isSample: true
    }
  ]

  useEffect(() => {
    let mounted = true
    setLoading(true)
    
    // Try to fetch from GitHub, fallback to sample projects
    fetchGithubRepos(username)
      .then(data => {
        if (mounted) {
          if (data.length > 0) {
            setRepos(data.slice(0, 6)) // Show first 6 GitHub projects
          } else {
            setRepos(sampleProjects) // Fallback to sample projects
          }
          setLoading(false)
        }
      })
      .catch(() => {
        if (mounted) {
          setRepos(sampleProjects)
          setLoading(false)
        }
      })
    
    return () => (mounted = false)
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="card animate-pulse">
            <div className="h-6 bg-surface rounded mb-4"></div>
            <div className="h-4 bg-surface rounded mb-2"></div>
            <div className="h-4 bg-surface rounded w-3/4"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(project => (
          <div key={project.id} className="card hover:shadow-purple-glow transition-all duration-300 group">
            <h4 className="font-semibold text-lg mb-2 group-hover:text-glow transition-colors">
              {project.name}
            </h4>
            <p className="text-muted text-sm mb-4 flex-grow">
              {project.description || 'No description available'}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs px-2 py-1 bg-surface rounded text-muted">
                {project.language || 'Various'}
              </span>
              {project.isSample ? (
                <span className="text-accent text-sm font-medium">Case Study Available</span>
              ) : (
                <a 
                  href={project.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:text-glow text-sm font-medium"
                >
                  View Code →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}