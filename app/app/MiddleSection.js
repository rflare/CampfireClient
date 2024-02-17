import { useContext } from 'react'
import UserPost from '@/components/UserPost.js'
import StateContext from '@/app/app/StateContext.js'

export default function MiddleSection() {

    const state = useContext(StateContext)

    return <>
        {state.feed.map((post, index) => 
            <UserPost key={index} name={post.name} text={post.text} time={post.timeMillis} />
        )}
    </>
}
