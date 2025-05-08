# GitHub User Search

A React application that allows users to search for GitHub profiles and view their top repositories. Built with **React + Vite** and powered by the **GitHub API**.

## Features

- Search for GitHub users using their username
- View user profile information including:
  - Profile picture
  - Bio
  - Follower count
  - Following count
  - Public repository count
- Display user's top 5 repositories sorted by stars
- Responsive design
- Loading states with shimmer effect
- Error handling
- Unit tests using **React Testing Library** and **Vitest**

## Components

- **SearchBar** – Handles user input and search functionality
- **UserProfile** – Displays user information and statistics
- **UserRepos** – Shows the user's top 5 repositories
- **ShimmerUI** – Displays a placeholder during loading states

## Technologies Used

- React
- Vite
- JavaScript
- HTML & CSS
- GitHub API
- React Testing Library
- Vitest

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed. You can download them from [https://nodejs.org](https://nodejs.org).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vishalmuwal/mythik-assignment.git
   cd mythik-assignment

   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Open in your browser**
   Visit http://localhost:5173 (or as shown in your terminal).

### Testing

To run the unit tests, use the following command:

```bash
npm run test
```
