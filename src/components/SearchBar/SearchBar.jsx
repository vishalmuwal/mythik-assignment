import { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(username)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  )
}

export default SearchBar