import { useState, useEffect } from "react"

export default function MouseFollower() {

    const [enabled, setEnabled] = useState(false)
    const [position, setPositon] = useState({ x: 0, y: 0 }) 

    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPositon( {x: clientX, y: clientY })
        }
        if (enabled) {
            window.addEventListener("pointermove", handleMove)
        }

        return () => {
            window.removeEventListener("pointermove", handleMove)
        }

    }, [enabled])

    useEffect(() => {
        document.body.classList.toggle("no-cursor", enabled)

        return () => {
            document.body.classList.remove("no-cursor")
        }
    }, [enabled])

    return (
        <article className="mouse-follower">
            <h3>Mouse follower</h3>
            <div style={{
                position: "fixed",
                background: "#09f",
                borderRadius: "50%",
                opacity: 0.5,
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
        </article>
    )
}