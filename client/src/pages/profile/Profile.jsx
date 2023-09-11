import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profile.css"

export default function Profile() {
  const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className='profileCoverImg' src= {`${PF}post/3.jpeg`} alt="" />
                    <img className="profileUserImg" src={`${PF}person/7.jpeg`} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Spyt Chrysostom</h4>
                    <span className="profileInfoDesc">Hello Friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed /> 
                <Rightbar profile/>
            </div>      
        </div>    
      </div>
    </>
  )
}
