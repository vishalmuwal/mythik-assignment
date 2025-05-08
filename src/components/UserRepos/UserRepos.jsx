import "./UserRepos.css";

const UserRepos = ({ repos }) => {
  const topRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  console.log(topRepos);

  return (
    <div className="user-repos">
      <h3>Top Repositories</h3>
      <div className="repos-grid">
        {topRepos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <h4>{repo.name}</h4>
            {repo.description && <p>{repo.description}</p>}
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🔄 {repo.forks_count}</span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRepos;
