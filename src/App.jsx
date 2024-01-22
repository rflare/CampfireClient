import { useState, useEffect } from 'react'

function App() {
    const [username, setUsername] = useState("")
    const [bodyText, setBodyText] = useState("")

    const [posts, setPosts] = useState("")

    useEffect(() => {
        fetch("http://localhost:53342/api/get")
            .then((res) => res.json())
            .then((res) => {
                setPosts(res[1].text)
            })
    }, [])
    


    function postData(username, bodytext)
    {

        fetch("http://localhost:53342/api/post",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: username,
                text: bodytext,
                time: Date.now()
            }),
        })

    }

    return (
        <>
            <h1>{2 + 2}{posts}</h1>


            <input type="text" value={username} maxLength="30" onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" value={bodyText} onChange={(e) => setBodyText(e.target.value)}/>


            <p>Name: {username}</p>
            <p>Text: {bodyText}</p>

            <button onClick={()=>postData(username, bodyText)}>Send post</button>
        </>
    )
}

export default App
