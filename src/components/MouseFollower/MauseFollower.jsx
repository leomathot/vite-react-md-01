import { useState, useEffect } from "react"

export default function MouseFollower() {

    const [enabled, setEnabled] = useState(false)
    const [position, setPositon] = useState({ x: -100, y: -100 }) 

    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPositon( {x: clientX, y: clientY })
        }
        if (enabled) {
            window.addEventListener("pointermove", handleMove)
            document.querySelector(".mouse-follower").classList.remove("hidden-follower")
        }

        return () => {
            window.removeEventListener("pointermove", handleMove)
            document.querySelector(".mouse-follower").classList.add("hidden-follower")
        }

    }, [enabled])

    useEffect(() => {
        document.body.classList.toggle("no-cursor", enabled)

        return () => {
            document.body.classList.remove("no-cursor")
        }
    }, [enabled])

    return (
        <article className="app-article" id="mouse-follower">
            <h3>Mouse follower</h3>
            <main>
                <div className="mouse-follower hidden-follower" style={{
                    position: "fixed",
                    background: "#09f",
                    borderRadius: "50%",
                    opacity: 0.35,
                    pointerEvents: "none",
                    left: -30,
                    top: -30,
                    width: 60,
                    height: 60,
                    transform: `translate(${position.x}px, ${position.y}px)`
                }}>
                </div>
                <button onClick={() => setEnabled(!enabled)}>
                    {enabled ? "Disable" : "Enable"} Mouse Follower
                </button>
            </main>
        </article>
    )
}