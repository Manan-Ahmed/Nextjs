import { PostType } from "./usertype"


type UserPostType = {
    post: PostType
}

export default function Post({post}:UserPostType){
    return(
        <>
        <p>{post.content}</p>
        <b>likes:{post.likes}</b>
        </>
    )
}