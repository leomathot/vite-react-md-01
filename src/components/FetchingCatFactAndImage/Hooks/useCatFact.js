import { useState, useEffect } from "react"

const CAT_FACTS_URL = "https://catfact.ninja/fact"

// useCatFact custom hook
export default function useCatFact () {
    const [fact, setFact] = useState("")

    function getNewFact() {
        // fetching random cat fact
        fetch(CAT_FACTS_URL)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }
    
    // to fetch the fact on the page load:
    useEffect(getNewFact, [])

    return { fact, getNewFact }
}
