import { useState, useEffect } from 'react'

import { downloadPosts } from './Network.jsx'
import { ErrorSection } from './ErrorSection.jsx'
import { TopSection } from './TopSection.jsx'
import { MiddleSection } from './MiddleSection.jsx'
import { BottomSection } from './BottomSection.jsx'

export default function App() {
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
