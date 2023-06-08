import FollowSuggestionsCard from "./FollowSuggestionsCard";

const users = [
    {
        userName: "frying_pan_face",
        name: "Flavia",
        initialIsFollowing: true
    },
    {
        userName: "crazy_pighead",
        name: "Akira",
        initialIsFollowing: false
    },
    {
        userName: "the_baby",
        name: "Sara",
        initialIsFollowing: false
    }
]

export default function FollowSuggestions() {
    return (
        <article className="follow-suggestions">
            <h3>Follow Suggestions</h3>
            <main>
                {
                    users.map(user => {
                        const { userName, name, initialIsFollowing } = user
                        return (
                            <FollowSuggestionsCard key={userName} userName={userName} initialIsFollowing={initialIsFollowing}>
                                {name}
                            </FollowSuggestionsCard>
                        )
                    })
                }
            </main>
        </article>
    )
}