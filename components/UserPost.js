import '@/styles/userpost.css'

export default function UserPost({name, text, timeMillis}) {
    return (
        <>
            <div className="postContainer">
                <span className="timeSpan">{new Date(Number(timeMillis)).toDateString()}</span>
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
            <br/>
        </>
    )
}
