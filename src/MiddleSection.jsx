import { Post } from './Post.jsx'

export function MiddleSection({ content }) {
    return <>
        {content.map((post, index) => 
            <Post key={index} name={post.name} text={post.text} time={post.time_millis} />
        )}
    </>
}
