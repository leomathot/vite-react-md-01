import { MoviesResult } from "./MovieAppList"
import { useSearch } from "./hooks/useSearch"
import { useMovies } from "./hooks/useMovies"
import { useState } from "react"
// import { useRef } from "react"

// MovieApp component
export default function MovieApp() {
    const [ sort, setSort ] = useState(false)
    const { searchInput, setSearchInput, error } = useSearch()
    const { movies, getMovies, loading } = useMovies({ searchInput, sort })
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
        getMovies({ searchInput })
    }

    const handleSort = () => {
        setSort(!sort)
    }

    // to make the input controlled
    const handleChange = (event) => {
        const newInput = event.target.value
        // if (newInput.startsWith(" ")) return
        setSearchInput(newInput)
        // getMovies({ searchInput: newInput })
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
                    <input type="checkbox" name="sort" onChange={handleSort} checked={sort} />
                    <button type="submit">Search</button>
                </form>
                {(error)? (<p className="error-message" style={{color: "red"}}>{error}</p>) : null}

                <div id="movie-search-results">
                    {
                        loading ? <p>Loading ...</p> : <MoviesResult movies={movies} />
                    }
                </div>

            </main>
        </article>
    )
}
