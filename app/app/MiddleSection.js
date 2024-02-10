import { useContext } from 'react'
import { Post } from '@/components/Post.js'
import { StateContext } from '@/app/app/StateContext.js'

export function MiddleSection() {

    const state = useContext(StateContext)

    return <>
        {state.feed.map((post, index) => 
            <Post key={index} name={post.name} text={post.text} time={post.time_millis} />
        )}
    </>
}
