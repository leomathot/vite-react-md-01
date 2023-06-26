import { useState, useRef } from "react"
import { searchMovies } from "../services/movies"

export function useMovies({ searchInput, sort }) {
    
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef("")

    const getMovies = async () => {
        if (searchInput === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            // console.log(previousSearch.current, searchInput)
            previousSearch.current = searchInput
            const newMovies = await searchMovies({ searchInput })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const sortedMovies = sort
        // ? [... movies].sort((a, b) => a.title.localeCompare(b.title))
        ? [... movies].sort((a, b) => a.year.slice(0, 4) - b.year.slice(0, 4))
        : movies

    // useMemo
    // Sort movies just when sort or movies changes
    // const sortedMovies = useMemo(() => {
    //     console.log("useMemo: sort movies")
    //     return sort
    //         ? [... movies].sort((a, b) => a.year.slice(0, 4) - b.year.slice(0, 4))
    //         : movies
    // }, [sort, movies])
    
    return { movies: sortedMovies, getMovies, loading, error }
}
