import { useContext } from 'react'
import '@/css/top.css'

import { StateContext } from './StateContext.js'

export function TopSection() {

    const state = useContext(StateContext)

    return (
        <div className="top">
            <h1>Campfire - An open source place</h1><br/>
            
            <a href="/app/upload/">Upload a post</a>
        </div>
    )
}
