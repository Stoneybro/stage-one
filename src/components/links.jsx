import { Link } from "react-router-dom"
import slack from '../assets/slack.png'
import github from "../assets/github.png"
function Links() {


    return (
   <div className="links">
    <a href="https://twitter.com/Stoneybr0" className="link" >Twitter Link</a>
    <a href="https://training.zuri.team/" className="link" id="btn__zuri">Zuri Team</a>
    <a href="https://books.zuri.team/" className="link" id="books" title="this is a where you find books about design and coding">Zuri Books</a>
    <a href="https://books.zuri.team/python-for-beginners?ref_id=<Zion>" className="link" id="book__python"  >Python Books</a>
    <a href="https://background.zuri.team" className="link" id="pitch">Background Check for Coders</a>
    <a href="https://books.zuri.team/design-rules" className="link" id="book__design">Design Books</a>
    <Link  className="link" id="contact" to='/contact'>Contact me</Link>
    <div className="socials">
        <img src={slack} alt="slack icon" /><img src={github} alt="github icon" />
    </div>
   </div>
     )
  }
  
  export default Links