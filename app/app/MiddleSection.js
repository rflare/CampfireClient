import { useContext } from 'react'
import UserPost from '@/components/UserPost.js'
import StateContext from './StateContext.js'

export default function MiddleSection() {

    const state = useContext(StateContext)

    return <>
        {state.userPosts.map((userpost, index) => 
            <UserPost key={index} name={userpost.name} text={userpost.text} timeMillis={userpost.timeMillis} />
        )}
    </>
}
