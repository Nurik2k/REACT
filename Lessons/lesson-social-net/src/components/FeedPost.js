import { useState } from "react"

export default function FeedPost(props) {

    let [post, setPost] = useState(props.post)
    let author = props.getUser(post.user_id)
    let [isLiked, toggleLike] = useState(false)

    return (
        <div className="card mb-3">
            <img src={post.img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title"><img src={author.avatar} style={{ width: 40, borderRadius: 50 }}></img>  {author.login}</h5>
                <p className="card-text">{post.text}</p>
                <div className="d-flex justify-content-end">
                    <button className="btn " onClick={() => { props.likePost(post.id, 0) }}>{
                        isLiked ? <i className="fa-solid fa-heart" /> : <i className="fa-regular fa-heart" />}
                        {post.likes.length}
                    </button>
                </div>
            </div>
        </div>
    )
}