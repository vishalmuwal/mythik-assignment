import "./UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <div className="user-info">
        <h2>{user.name || user.login}</h2>
        <p className="username">@{user.login}</p>
        {user.bio && <p className="bio">{user.bio}</p>}
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{user.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-number">{user.following}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat">
            <span className="stat-number">{user.public_repos}</span>
            <span className="stat-label">Repos</span>
          </div>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
