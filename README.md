# CineLog

CineLog is a full-stack movie discovery and tracking platform built using the MERN stack.
The project focuses on movie search, authentication, logging watched movies, and intelligent movie discovery using external movie APIs.

The application integrates with TMDB (The Movie Database) to fetch movie data and metadata.

---

## Features

### Current Features

* User Authentication

  * Register
  * Login
  * JWT-based authentication
  * Protected routes

* Movie Integration

  * Search movies using TMDB API
  * Fetch movie details
  * Backend API proxy for TMDB requests

* Backend Architecture

  * Express.js REST API
  * MongoDB with Mongoose
  * Modular MVC structure
  * JWT authentication middleware

---

## Planned Features

* Watchlist system
* Movie logging and rating
* User reviews
* Personalized recommendations
* Semantic movie search
* Profile pages
* Movie analytics dashboard

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

### External APIs

* TMDB API

---

## Project Structure

```text
cinelog/
│
├── client/
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── index.js
│   │
│   ├── .env
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

## Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Megh39/cinelog
cd cinelog
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

#### Get Current User

```http
GET /api/auth/me
```

---

### Movies

#### Search Movies

```http
GET /api/movies/search?q=interstellar
```

#### Get Movie Details

```http
GET /api/movies/:tmdbId
```

---

## Future Improvements

* Recommendation engine
* Semantic embeddings for movie similarity
* Collaborative filtering
* Review sentiment analysis
* Social features
* Infinite scroll and caching
* Docker deployment

---

## Author

Megh Nanavati

---
