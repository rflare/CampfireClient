import { useState, useEffect } from 'react'

function App() {
    const [username, setUsername] = useState("")
    const [bodyText, setBodyText] = useState("")

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/api/get")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setPosts(res)
            })
    }, [])
    


    function postData(username, bodytext)
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

    return (
        <>
            

            <div style={{position:"fixed", backgroundColor:"#aaa", width:"100%"}}>
                <label>Your name:</label><br/>
                <input type="text" value={username} maxLength="30" onChange={(e) => setUsername(e.target.value)}/><br/>

                <label>What do you want to say?</label><br/>
                <textarea value={bodyText} onChange={(e) => setBodyText(e.target.value)} rows={4} cols={30}/><br/>

                <p>Name: {username}</p>
                <p>Text: {bodyText}</p>
                <button onClick={()=>postData(username, bodyText)}>Send post</button>
            </div>

            <div style={{height:"300px"}}></div>

            <ul>{posts.map((post, index) => 
                <li key={index}>{post.name} said: {post.text} at {new Date(post.time_millis).toDateString()}</li>
            )}</ul>



        </>
    )
}

export default App
