
import { useState } from "react"
import pic from "../assets/profilehover.png"
import choosepic from "../assets/profileimg.png"
import share from '../assets/share.png'
import mobileshare from '../assets/mobileshare.png'

function Profile() {
    const [hover,sethover]=useState(false)
    return (
    <div className="profile">
       <div onMouseOver={()=>sethover(true)} onMouseLeave={()=>sethover(false)}>{hover?<img src={pic} alt="profile picture" id="profile__img" />:<img src={choosepic} alt="choose profile picture" id="profile__img" />}
       </div>
        <img className="share share-desktop" src={share} alt="" />
        <img src={mobileshare} className="share share-mobile" alt="" />
        <div id="twitter">Stoneybro</div>
        <div id="slack">Zion</div>
    </div>
     )
  }
  export default Profile