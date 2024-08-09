"use client"
import Greet from "./greet";
import Hobbies from "./hobbies";
import Post from "./post";
import { UserType } from "./usertype";

type userTimeLineType ={
    userData: (UserType | null)
}


export default function userTimeLine({userData}:userTimeLineType ){
return(
    <>
      <Greet
      userName={userData?.userName}/>
    
    <Hobbies
    hobbies={userData?.hobbies}
   
    />
{
    userData?.post?.map((postData,index)=>(
 <Post
 
    post={postData}
 />
    ))
}

    </>
)
}



