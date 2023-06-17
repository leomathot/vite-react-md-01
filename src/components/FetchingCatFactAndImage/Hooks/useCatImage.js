import { useState, useEffect } from "react"

const CAT_IMAGES_URL = "https://cataas.com/cat/says/"

// useCatImage custom hook
export default function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        // fetching image from longest word in fact

        if (!fact) return
        // get longest word in fact
        const factWords = fact.split(" ")
        let longestWordInFact = ""
        factWords.forEach((word) => {
            if (word.length > longestWordInFact.length) {
                longestWordInFact = word
            }
        })
        let fetchingUrl = `${CAT_IMAGES_URL}${longestWordInFact}`
        // fetch a cat image for the longest word in fact
        fetch(fetchingUrl)
            .then(data => {
                setImageUrl(data.url)
            })
    }, [fact])

    return { imageUrl }
}
