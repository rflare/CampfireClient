import { useState, useEffect } from 'react'

import { downloadPosts } from './Network.jsx'
import { ErrorSection } from './ErrorSection.jsx'
import { TopSection } from './TopSection.jsx'
import { MiddleSection } from './MiddleSection.jsx'
import { BottomSection } from './BottomSection.jsx'

// Main app

export default function App() {
    //Main State for the application
    //Includes:
    // - Username for post
    // - Body text for post
    // - Feed containing posts that client recieves per reload
    // Note: Can only fetch 100 posts per reload
    // - Error state as boolean
    //    - If there is error, app assumes as 500 interal server error
    //
    const [username, setUsername] = useState("")
    const [bodyText, setBodyText] = useState("")

    const [feed, setFeed] = useState([])
    const [err, setErr] = useState(false)

    //Fetches posts per reload
    useEffect(() => {
        downloadPosts(setErr, setFeed)
    }, [])
    

    if(err)
    {
        //Error page if could not fetch posts
        return <ErrorSection />
    }
    return (
        <>
            {
                 //Main top section
                //includes main title and stuff for uploading   
            }

            <TopSection
                username={username} setUsername={setUsername}
                bodyText={bodyText} setBodyText={setBodyText}
            />

            <br/>

            {

                //Middle section
                //Contains feed with posts
            }
            <MiddleSection content={feed} />

            <br/>

            {
                //Bottom Section
                //Contains useless information that is critical knowledge to the average viewer
            }
            <BottomSection />



        </>
    )
}
