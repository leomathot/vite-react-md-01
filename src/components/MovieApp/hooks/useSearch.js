import { useEffect, useState, useRef } from "react"


export function useSearch() {
    const [searchInput, setSearchInput] = useState("")
    const [error, setError] = useState(null)
    const isBeforeFirstSearch = useRef(true)
    
    useEffect(() => {
        if (isBeforeFirstSearch.current) {
            isBeforeFirstSearch.current = searchInput === ""
            return
        }
        if (searchInput === "") {
            setError("The input is empty")
            return
        }
        if (searchInput.match(/^\d+$/)) {
            setError("Type at least a word")
            return
        }
        if (searchInput.length < 3) {
            setError("Type a longer word")
            return
        }
        setError(null)
    }, [searchInput])

    return { searchInput, setSearchInput, error}
}