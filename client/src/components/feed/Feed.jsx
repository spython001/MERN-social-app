/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import Share from "../../components/share/Share"
import Post from "../../components/post/Post"
import "./feed.css"
import axios from "axios"


export default function Feed({username}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username 
      ? await axios.get("http://localhost:8800/api/posts/profile/"+username)
      : await axios.get("http://localhost:8800/api/posts/timeline/64e21d8bea1f62869a55a66e");
      setPosts(res.data)
    };
    fetchPosts();
  }, [username]);
  

  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share />
          {posts.map((p) => (
            <Post key={p._id} post={p}/>
          ))}
        </div>
    </div>
  )
}
