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

    useEffect(() => {
        downloadPosts(setErr, setFeed)
    }, [])
    

    if(err)
    {
        return <ErrorSection />
    }
    return (
        <>

            <TopSection
                username={username} setUsername={setUsername}
                bodyText={bodyText} setBodyText={setBodyText}
            />

            <br/>

            <MiddleSection content={feed} />

            <br/>

            <BottomSection />



        </>
    )
}
