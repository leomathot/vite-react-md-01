import {  MoviesResult } from "./MovieAppList"
import resultsSuccess from "./mocks/results-success.json"
// import resultsFailure from "./mocks/results-failure.json"

// const OMDB_API_URL = "http://www.omdbapi.com/?apikey=[yourkey]&"
// const API_KEY = "fe8974bf"

export default function MovieApp() {

    const apiMovies = resultsSuccess.Search
    // const movies = resultsFailure.Search

    const movies = apiMovies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        type: movie.Type
    }))

    return (
        <article className="app-article" id="movie-app">
            <h3>Movie App</h3>
            <main>
                
                <form id="movie-app-form">
                    <label>
                        <input id="movie-search-input" type="text" placeholder="Batman"/>
                    </label>
                    <button type="submit">Search</button>
                </form>

                <div id="movie-search-results">
                    <MoviesResult movies={movies} />
                </div>

            </main>
        </article>
    )
}
