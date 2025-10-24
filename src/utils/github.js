import axios from 'axios'

/**
 * Fetch public repos for a GitHub user.
 * Filters out forks by default.
 */
export async function fetchGithubRepos(username, { includeForks = false } = {}) {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: { per_page: 100, sort: 'updated' },
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
    let repos = res.data
    if (!includeForks) repos = repos.filter(r => !r.fork)
    // Map to needed fields
    return repos.map(r => ({
      id: r.id,
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      language: r.language,
      updated_at: r.updated_at
    }))
  } catch (err) {
    console.error('Failed to fetch GitHub repos', err)
    return []
  }
}
