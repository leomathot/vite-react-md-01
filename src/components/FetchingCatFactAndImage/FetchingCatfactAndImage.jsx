import useCatFact from "./Hooks/useCatFact.js"
import useCatImage from "./Hooks/useCatImage.js"

// FetchingTest component 
export default function FetchingCatFactAndImage() {

    const { fact, getNewFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    return (
        <article className="app-article" id="fetching-test">
            <h3>Fetching Cat Fact and Image</h3>
            <main>
                <div className="fact-cont">
                    {fact && <p data-testid="cat-fact">{fact}</p>}
                    <img src={imageUrl} data-testid="cat-img" alt={`Cat photo fetched using the longest word in the following random cat fact: ${fact}`}/>
                    <button className="get-fact-btn" onClick={getNewFact}>New fact</button>
                </div>
            </main>
        </article>
    )
}
