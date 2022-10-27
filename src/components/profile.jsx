import { useEffect } from "react"
import { useState } from "react"


function Profile() {
    const [hover,sethover]=useState(false)
    useEffect(()=>{
        
    })
    return (
    <div className="profile">
       <div onMouseOver={()=>sethover(true)} onMouseLeave={()=>sethover(false)}>{hover?<img src="src/assets/profilehover.png" alt="" id="profile__img" />:<img src="src/assets/profileimg.png" alt="" id="profile__img" />}</div>
        <div id="twitter">Stoneybro</div>
        <div id="slack">Zion</div>
    </div>
     )
  }
  export default Profile