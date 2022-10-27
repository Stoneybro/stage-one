import slack from '../assets/slack.png'
import github from "../assets/github.png"
import zuri from "../assets/zuri.png"
import i4g from "../assets/I4G.png"
function Footer() {


    return (
   <footer>
    <div className="socials">
        <img src={slack} alt="slack icon" /><img src={github} alt="github icon" />
    </div>
    <div className="sponsors">
        <img src={zuri} alt="zuri internship logo" />
        <div>HNG Internship 9 Frontend Task</div>
        <img src={i4g} alt="I4G logo" />
    </div>
   </footer>
     )
  }
  
  export default Footer