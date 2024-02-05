import { useContext } from 'react'
import { Post } from './Post.jsx'
import { StateContext } from './StateContent.jsx'

export function MiddleSection() {

    const state = useContext(StateContext)

    return <>
        {state.feed.map((post, index) => 
            <Post key={index} name={post.name} text={post.text} time={post.time_millis} />
        )}
    </>
}
