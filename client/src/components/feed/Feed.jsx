/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react"
import Share from "../../components/share/Share"
import Post from "../../components/post/Post"
import "./feed.css"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"


export default function Feed({username}) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username 
      ? await axios.get("http://localhost:8800/api/posts/profile/"+ username)
      : await axios.get("http://localhost:8800/api/posts/timeline/"+ user._id);
      setPosts(res.data)
    };
    fetchPosts();
  }, [username,user._id]);
  

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
