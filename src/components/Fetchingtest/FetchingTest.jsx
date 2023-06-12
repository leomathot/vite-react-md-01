import { useEffect, useState } from "react"


const CAT_FACTS_URL = "https://catfact.ninja/fact"
// const CAT_IMAGES_URL = "https://cataas.com/cat/says/hello"

export default function FetchingTest() {

    const [fact, setFact] = useState()
    const [fact2, setFact2] = useState()

    useEffect(() => {
        fetch(CAT_FACTS_URL)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const firstWord = fact.split(" ")[0]
                console.log(firstWord)
            })

        // fetching 2 with async await
        async function fetchFact2() {
            const res2 = await fetch(CAT_FACTS_URL)
            const json2 = await res2.json()
            setFact2(json2.fact)
        }
        fetchFact2()

    }, [])

    return (
        <article className="app-article" id="fetching-test">
            <h3>Fetching test</h3>
            <main>
                <div className="fact-cont">
                    {fact && <p>{fact}</p>}
                    <button>New fact</button>
                </div>

                <div className="fact-cont">
                    {fact2 && <p>{fact2}</p>}
                    <button>New fact</button>
                </div>
            </main>
        </article>
    )
}