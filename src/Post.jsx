export function Post({name, text, time}) {
    return (
        <>
            <div className="postContainer">
                <span>{new Date(time).toDateString()}</span>
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
            <br/>
        </>
    )
}
