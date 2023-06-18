
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function FollowSuggestionsCard({ children="-", userName="", initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const btnText = isFollowing ? "Following" : "Follow"
    const btnClassName = isFollowing ? "following" : "follow"

    return(
        <article className="follow-card">
            <header>
                <img src={`./assets/images/user-card-${children}.jpg`} alt={`${children} avatar`} />
                <div>
                    <h4>{children}</h4>
                    <p className="card-user-name">@{userName}</p>
                </div>
            </header>
            <button className={btnClassName} onClick={handleClick}>
                <span className="text-following"><strong>{btnText}</strong></span>
                <span className="text-stop-following"><strong>Unfollow</strong></span>
            </button>
        </article>
    )
}