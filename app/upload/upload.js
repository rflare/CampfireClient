import { useState } from 'react'

import { uploadPost } from '../../components/Network.js/index.js'
import { BottomSection } from '../../components/BottomSection.js/index.js'

import '../css/upload.css'

export default function Upload() {

    const [username, setUsername] = useState("")
    const [text, setText] = useState("")

    return <> 
        <div className="flexCenterer">
            <div className="uploadContainer">

                <h1>Upload a post</h1><br/>

                <label>Your name</label><br/>
                <input type="text" value={username} maxLength="30" onChange={(e) => setUsername(e.target.value)}/><br/>
        
                <label>What do you want to say?</label><br/>
                <textarea value={text} onChange={(e) => setText(e.target.value)} wrap="off" /><br/>
        
                <button onClick={()=>uploadPost(username, text)}>Upload post</button>

            </div>
        </div>
            

        <BottomSection />
    </>
}
