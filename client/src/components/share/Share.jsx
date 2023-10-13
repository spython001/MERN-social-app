import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import { useContext, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"

export default function Share() {

  const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef()
  const [file, setFile] = useState(null);

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src= {user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"}  alt="" />
                <input 
                    placeholder={"What's on your mind "+user.username+"?"} 
                    className="shareInput"
                    ref={desc}
                />
            </div>
            <hr className="shareHr"/>
            
            <form className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                        <input type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </form>
        </div>
    </div>
  )
}
