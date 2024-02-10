import { useContext } from 'react'
import '@/css/top.css'

import { uploadPost } from '@/components/Network.js'
import { StateContext } from './StateContext.js'

export function TopSection() {

    const state = useContext(StateContext)

    return (
        <header>
            <h1>Campfire - A place</h1><br/>
            
            <a href="/upload/">Upload a post</a>


        </header>
    )
}
