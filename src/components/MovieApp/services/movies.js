// import mockResultsSuccess from "../mocks/results-success.json"
// import mockResultsFailure from "../mocks/results-failure.json"

const API_KEY = "fe8974bf"
const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`

export const searchMovies = async ({ searchInput }) => {
    if (searchInput === "") return null

    // if (searchInput) {
    //     // setResponseMovies(mockResultsSuccess)
    //     return fetch(`${OMDB_API_URL}${searchInput}`)
    //         .then(res => res.json())
    //         .then(json => {
    //             setResponseMovies(json)
    //         })
    // } else {
    //     return setResponseMovies(mockResultsFailure)
    // }

    try {
        const response = await fetch(`${OMDB_API_URL}${searchInput}`)
        const json = await response.json()

        const resultsMovies = json.Search
        const movies = resultsMovies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            type: movie.Type
        }))

        return movies
        
    } catch (e) {
        throw new Error("Search error o___o")
    }
}