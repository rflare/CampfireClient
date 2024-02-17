'use client'

import { useState, useEffect } from 'react'

import { downloadUserPosts } from '@/components/NetworkUtils.js'
import BodySection from './BodySection.js'
import BottomSection from '@/components/BottomSection.js'
import StateContext from './StateContext.js'

export default function Page() {

    const [feed, setFeed] = useState([])
    const [err, setErr] = useState(false)


    //Fetches posts per reload
    useEffect(() => {
        downloadUserPosts(setErr, setFeed)
    }, [])
    
    return (
        <StateContext.Provider value = {{

            feed: feed,
            setFeed: setFeed,

            err: err,
            setErr: setErr
        }}>

            <BodySection />


        </StateContext.Provider>
    )
}
