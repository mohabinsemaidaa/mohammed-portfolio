import React, { useEffect, useState } from 'react'
import { fetchGithubRepos } from '../utils/github'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const username = 'mohabinsemaidaa' // Replace with your GitHub username

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchGithubRepos(username).then(data => {
      if (mounted) {
        setRepos(data.slice(0, 6)) // Show only first 6 projects
        setLoading(false)
      }
    })
    return () => (mounted = false)
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
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
      <div className="grid md:grid-cols-3 gap-6">
        {repos.length === 0 ? (
          <div className="col-span-3 card text-center">
            <p className="text-muted">No public projects found or username not set.</p>
            <p className="text-sm mt-2">Set your GitHub username in <code className="bg-surface px-2 py-1 rounded">src/components/Projects.jsx</code></p>
          </div>
        ) : (
          repos.map(repo => (
            <div key={repo.id} className="card hover:shadow-purple-glow transition-all duration-300">
              <h4 className="font-semibold text-lg mb-2">{repo.name}</h4>
              <p className="text-muted text-sm mb-4 flex-grow">
                {repo.description || 'No description available'}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs px-2 py-1 bg-surface rounded text-muted">
                  {repo.language || 'Various'}
                </span>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:text-glow text-sm font-medium"
                >
                  View Code →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}