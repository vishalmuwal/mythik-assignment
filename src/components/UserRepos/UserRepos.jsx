import './UserRepos.css'

const UserRepos = ({ repos }) => {
  return (
    <div className="user-repos">
      <h3>Public Repositories</h3>
      <div className="repos-grid">
        {repos.map(repo => (
          <div key={repo.id} className="repo-card">
            <h4>{repo.name}</h4>
            {repo.description && <p>{repo.description}</p>}
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🔄 {repo.forks_count}</span>
            </div>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserRepos