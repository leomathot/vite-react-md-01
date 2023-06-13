import { useEffect, useState } from "react"


const CAT_FACTS_URL = "https://catfact.ninja/fact"
const CAT_IMAGES_URL = "https://cataas.com/cat/says/"

export default function FetchingTest() {

    const [fact, setFact] = useState()
    const [longestWord, setLongestWord] = useState()
    const [imageUrl, setImageUrl] = useState()
    // const [fact2, setFact2] = useState()

    useEffect(() => {

        // fetching fact 1
        fetch(CAT_FACTS_URL)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                // const firstWord = fact.split(" ")[0]
                // const first3WordsA = fact.split(" ").slice(0, 3).join(" ")
                // const first3WordsB = fact.split(" ", 3).join(" ")
                const factWords = fact.split(" ")
                let longestWordInFact = ""
                factWords.forEach((element) => {
                    if (element.length > longestWordInFact.length) {
                        longestWordInFact = element
                    }
                })
                setLongestWord(longestWordInFact)
                    console.log(longestWordInFact)

                // fetching image from longest word in fact 1
                let fetchingUrl = `${CAT_IMAGES_URL}${longestWordInFact}`
                fetch(fetchingUrl)
                    .then(data => {
                        setImageUrl(data.url)
                        console.log(fetchingUrl)
                    })
            })
        

        // fetching fact 2 with async await
        // async function fetchFact2() {
        //     const res2 = await fetch(CAT_FACTS_URL)
        //     const json2 = await res2.json()
        //     setFact2(json2.fact)
        // }
        // fetchFact2()

    }, [])

    return (
        <article className="app-article" id="fetching-test">
            <h3>Fetching test</h3>
            <main>
                <div className="fact-cont">
                    {fact && <p>{fact}</p>}
                    <img src={imageUrl} alt={`cat photo for the word ${longestWord}`}/>
                    <button>New fact</button>
                </div>

                {/* <div className="fact-cont">
                    {fact2 && <p>{fact2}</p>}
                    <button>New fact</button>
                </div> */}
            </main>
        </article>
    )
}