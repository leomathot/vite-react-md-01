import { useEffect, useState } from "react"


const catsFactsUrl = "https://catfact.ninja/fact"
const catsImagesUrl = "https://cataas.com/cat/says/hello"

export default function FetchingTest() {

    const [fact, setFact] = useState()

    useEffect(() => {
        fetch(catsFactsUrl)
            .then(response => response.json())
            .then(data => setFact(data.fact))
    }, [])

    return (
        <article className="app-article" id="fetching-test">
            <h3>Fetching test</h3>
            <main>
                {fact && <p>{fact}</p>}
                <button>New fact</button>
            </main>
        </article>
    )
}