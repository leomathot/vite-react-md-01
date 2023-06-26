/* eslint-disable react/prop-types */
export function MoviesFound({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <header>
                            <h3>{movie.title}</h3>
                            <p>{movie.year}</p>
                        </header>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMoviesFound() {
    return (
        <p>No movies found!</p>
    )
}

export function MoviesResult({ movies }) {
    
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <MoviesFound movies={movies}/>
            : <NoMoviesFound/>
    )
}
