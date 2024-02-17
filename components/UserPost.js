import '@/css/post.css'

export default function UserPost({name, text, time}) {
    return (
        <>
            <div className="postContainer">
                <span className="timeSpan">{new Date(time).toDateString()}</span>
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
            <br/>
        </>
    )
}
