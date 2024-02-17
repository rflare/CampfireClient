'use client'

import { useState, useEffect } from 'react'

import { downloadUserPosts } from '@/components/NetworkUtils.js'
import BodySection from './BodySection.js'
import BottomSection from '@/components/BottomSection.js'
import StateContext from './StateContext.js'

export default function Page() {

    const [userPosts, setUserPosts] = useState([])
    const [isErr, setIsErr] = useState(false)


    //Fetches posts per reload
    useEffect(() => {
        downloadUserPosts(setIsErr, setUserPosts)
    }, [])
    
    return (
        <StateContext.Provider value = {{

            userPosts: userPosts,
            setUserPosts: setUserPosts,

            isErr: isErr,
            setIsErr: setIsErr
        }}>

            <BodySection />


        </StateContext.Provider>
    )
}
