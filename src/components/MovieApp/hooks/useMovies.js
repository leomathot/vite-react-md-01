import { useState } from "react"
import { searchMovies } from "../services/movies"

export function useMovies({ searchInput }) {
    
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getMovies = async () => {
        try {
            setLoading(true)
            setError(null)
            const newMovies = await searchMovies({ searchInput })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return { movies, getMovies, loading, error }
}
