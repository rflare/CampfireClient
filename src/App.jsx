import { useState, useEffect } from 'react'
import './css/index.css'

export default function App() {
    const [username, setUsername] = useState("")
    const [bodyText, setBodyText] = useState("")

    const [feed, setFeed] = useState([])

    useEffect(() => {
        fetch("/api/get")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setFeed(res)
            })
    }, [])
    

    return (
        <>
            

            <header>
                <label>Your name:</label><br/>
                <input type="text" value={username} maxLength="30" onChange={(e) => setUsername(e.target.value)}/><br/>

                <label>What do you want to say?</label><br/>
                <textarea value={bodyText} onChange={(e) => setBodyText(e.target.value)} wrap="off" /><br/>

                <button onClick={()=>uploadPost(username, bodyText)}>Upload post</button>

            </header>

            <br/>

            {feed.map((post, index) => 
                <Post key={index} name={post.name} text={post.text} time={post.time_millis} />
            )}

            <br/>

            <footer></footer>



        </>
    )
}

function Post({name, text, time}) {
    return (
        <>
            <div className="postContainer">
                <span>{new Date(time).toDateString()}</span>
                <h1>{name}</h1>
                <p>{text}</p>
            </div>
            <br/>
        </>
    )
}

function uploadPost(username, bodytext)
{
    fetch("/api/post",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username,
            text: bodytext,
            time: Date.now()
        })
    })
}

