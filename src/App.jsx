import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import UserProfile from "./components/UserProfile/UserProfile";
import UserRepos from "./components/UserRepos/UserRepos";
import ShimmerUI from "./components/ShimmerUI/ShimmerUI";

function App() {
  const [theme, setTheme] = useState("light");
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const searchUser = async (username) => {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);
    setUserRepos([]);

    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      if (userResponse.status === 404) {
        throw new Error("User not found");
      }

      if (!userResponse.ok) {
        throw new Error("Failed to fetch user data");
      }

      setUserData(userData);

      // Fetch repos
      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      if (!reposResponse.ok) {
        throw new Error("Failed to fetch repositories");
      }

      setUserRepos(reposData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <h1>Search</h1>
      <SearchBar onSearch={searchUser} />

      {loading && <ShimmerUI />}

      {error && <div className="error">{error}</div>}

      {userData && !loading && (
        <>
          <UserProfile user={userData} />
          <UserRepos repos={userRepos} />
        </>
      )}
    </div>
  );
}

export default App;
