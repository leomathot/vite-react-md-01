import { MoviesResult } from "./MovieAppList"
import { useSearch } from "./hooks/useSearch"
import { useMovies } from "./hooks/useMovies"
// import { useRef } from "react"

// const OMDB_API_URL = "http://www.omdbapi.com/?apikey=[yourkey]&"
// const API_KEY = "fe8974bf"

// MovieApp component
export default function MovieApp() {
    const { searchInput, setSearchInput, error } = useSearch()
    const movies = useMovies()
    // const inputRef = useRef()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const inputElement = inputRef.current
    //     const value = inputElement.value
    //     console.log(value)
    // }
    const handleSubmit = (event) => {
        event.preventDefault()
        // const fields = Object.fromEntries(new window.FormData(event.target))
        // const searchInput = fields["search-input"]
        console.log(searchInput)
    }

    // to make the input controlled
    const handleChange = (event) => {
        // if (event.target.value.startsWith(" ")) return
        setSearchInput(event.target.value)
    }

    return (
        <article className="app-article" id="movie-app">
            <h3>Movie App</h3>
            <main>
                
                <form id="movie-app-form" onSubmit={handleSubmit}>
                    <label>
                        {/* <input ref={inputRef} id="movie-search-input" type="text" placeholder="Batman"/> */}
                        {/* <input name="search-input" id="movie-search-input" type="text" placeholder="Batman"/> */}
                        <input 
                            style={{
                                borderColor: error ? "red" : "gray"
                            }} 
                            value={searchInput} 
                            onChange={handleChange} 
                            name="search-input" 
                            id="movie-search-input" 
                            type="text" 
                            placeholder="Batman"
                        />
                    </label>
                    <button type="submit">Search</button>
                </form>
                {(error)? (<p className="error-message" style={{color: "red"}}>{error}</p>) : null}

                <div id="movie-search-results">
                    <MoviesResult movies={movies} />
                </div>

            </main>
        </article>
    )
}
