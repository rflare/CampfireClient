"use client"

import { useState } from 'react'

import { uploadUserPost } from '@/components/NetworkUtils.js'
import BottomSection from '@/components/BottomSection.js'

import '@/css/upload.css'

export default function Page() {

    const [username, setUsername] = useState("")
    const [text, setText] = useState("")

    return <> 
        <div className="flexCenterer">
            <div className="uploadContainer">

                <h1>Upload a post</h1><br/>

                <label>Your name</label><br/>
                <input 
                    type="text"
                    value={username}
                    maxLength="30"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
        
                <label>What do you want to say?</label><br/>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    wrap="off"
                />
                <br/>
        
                <button onClick={()=>uploadUserPost(username, text)}>Upload post</button>

            </div>
        </div>
    </>
}
