import { useState, useEffect } from 'react'

import { downloadPosts } from './Network.jsx'
import { ErrorSection } from './ErrorSection.jsx'
import { TopSection } from './TopSection.jsx'
import { MiddleSection } from './MiddleSection.jsx'
import { BottomSection } from './BottomSection.jsx'

<<<<<<< HEAD
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
=======
export default function App() {
>>>>>>> 8043af141fd56dffed23557404621b576a3f7087
    const [username, setUsername] = useState("")
    const [bodyText, setBodyText] = useState("")

    const [feed, setFeed] = useState([])
    const [err, setErr] = useState(false)

<<<<<<< HEAD
    //Fetches posts per reload
=======
>>>>>>> 8043af141fd56dffed23557404621b576a3f7087
    useEffect(() => {
        downloadPosts(setErr, setFeed)
    }, [])
    

    if(err)
    {
<<<<<<< HEAD
        //Error page if could not fetch posts
=======
>>>>>>> 8043af141fd56dffed23557404621b576a3f7087
        return <ErrorSection />
    }
    return (
        <>
<<<<<<< HEAD
            {
                 //Main top section
                //includes main title and stuff for uploading   
            }
=======
>>>>>>> 8043af141fd56dffed23557404621b576a3f7087

            <TopSection
                username={username} setUsername={setUsername}
                bodyText={bodyText} setBodyText={setBodyText}
            />

            <br/>

<<<<<<< HEAD
            {

                //Middle section
                //Contains feed with posts
            }
=======
>>>>>>> 8043af141fd56dffed23557404621b576a3f7087
            <MiddleSection content={feed} />

            <br/>

<<<<<<< HEAD
            {
                //Bottom Section
                //Contains useless information that is critical knowledge to the average viewer
            }
=======
>>>>>>> 8043af141fd56dffed23557404621b576a3f7087
            <BottomSection />



        </>
    )
}
