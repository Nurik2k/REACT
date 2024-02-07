import { useState } from "react";
import FeedPost from "./FeedPost";

export default function Feed(props) {

    let [posts, setPosts] = useState(props.posts)

    return (
        <div className="container my-5">
            {
                posts.map(post => {
                    return (
                        <FeedPost post={post} users={props.users} getUser={props.getUser} likePost={props.likePost}/>
                    )
                })
            }
        </div>
    )
}