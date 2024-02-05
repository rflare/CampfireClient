import { useContext } from 'react'
import './css/top.css'

import { uploadPost } from './Network.jsx'
import { StateContext } from './StateContent.jsx'

export function TopSection() {

    const state = useContext(StateContext)

    return (
        <header>
            <h1>Campfire - A place</h1><br/>

            <label>Your name:</label><br/>
            <input type="text" value={state.username} maxLength="30" onChange={(e) => state.setUsername(e.target.value)}/><br/>

            <label>What do you want to say?</label><br/>
            <textarea value={state.bodyText} onChange={(e) => state.setBodyText(e.target.value)} wrap="off" /><br/>

            <button onClick={()=>uploadPost(state.username, state.bodyText)}>Upload post</button>

        </header>
    )
}
