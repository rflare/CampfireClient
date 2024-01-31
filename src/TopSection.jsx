import './css/top.css'

import { uploadPost } from './Network.jsx'

export function TopSection({ username, setUsername, bodyText, setBodyText}) {
    return (
        <header>
            <h1>BigRus - The App for Sigma Males</h1><br/>

            <label>Your name:</label><br/>
            <input type="text" value={username} maxLength="30" onChange={(e) => setUsername(e.target.value)}/><br/>

            <label>What do you want to say?</label><br/>
            <textarea value={bodyText} onChange={(e) => setBodyText(e.target.value)} wrap="off" /><br/>

            <button onClick={()=>uploadPost(username, bodyText)}>Upload post</button>

        </header>
    )
}
