import { useState, useEffect } from 'react'
import './css/index.css'

export default function App() {
    const [username, setUsername] = useState("")
    const [bodyText, setBodyText] = useState("")

    const [feed, setFeed] = useState([])
    const [err, setErr] = useState(false)

    useEffect(() => {
        fetch("/api/get")
        .then((res) => {
            if (!res.ok) {
                setErr(true)
            }
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setFeed(data)
        })
    }, [])
    

    if(err)
    {
        return (
	    <div className="errorSection">
		<h1>500 - Internal server error</h1>
		<h2>Uh oh, looks like one of the servers is down. We won't fix it lol💀</h2>
	    </div>
        )
    }
    return (
        <>

            <header>
                <h1>BigRus - The App for Sigma Males</h1><br/>

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

            <footer>
		        <span>Source code: <a href="https://github.com/rusluck/BigRus.git">https://github.com/rusluck/BigRus.git</a></span><br/>
		        <span>License: Go look for it↑↑↑</span><br/>
		        <span>Privacy Policy: Check yourself</span><br/>
	        </footer>



        </>
    )
}

function Post({name, text, time}) {
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


function uploadPost(username, bodytext) {
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