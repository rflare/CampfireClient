import { useState, useEffect, createContext } from 'react'

import { downloadPosts } from './Network.jsx'
import { BodySection } from './BodySection.jsx'
import { BottomSection } from './BottomSection.jsx'
import { StateContext } from './StateContent.jsx'

export default function App() {
    const [username, setUsername] = useState("")
    const [bodyText, setBodyText] = useState("")

    const [feed, setFeed] = useState([])
    const [err, setErr] = useState(false)


    //Fetches posts per reload
    useEffect(() => {
        downloadPosts(setErr, setFeed)
    })
    
    return (
        <StateContext.Provider value = {{
            username: username,
            setUsername: setUsername,
            
            bodyText: bodyText,
            setBodyText: setBodyText,

            feed: feed,
            setFeed: setFeed,

            err: err,
            setErr: setErr
        }}>

            <BodySection />

            <BottomSection />



        </StateContext.Provider>
    )
}
