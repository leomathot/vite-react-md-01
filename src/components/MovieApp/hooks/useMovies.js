import resultsSuccess from "../mocks/results-success.json"
// import resultsFailure from "../mocks/results-failure.json"

export function useMovies() {
    
    const apiMovies = resultsSuccess.Search
    // const movies = resultsFailure.Search

    const movies = apiMovies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        type: movie.Type
    }))

    return movies
}
