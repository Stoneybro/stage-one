 import Footer from "../components/footer"
 export default function Contact(params) {
    return(
            <div className="contact">
                <div className="contact-page">
                <div className="contact-header">
                <h1>Contact Me</h1>
                <div>Hi there, contact me to ask me about anything you have in mind.</div>
                </div>
              
                <form className="form-contact" onSubmit={(e)=>e.preventDefault()}>
                <div className="name-input">
                <label htmlFor="first_name">First name
                <input type="text"
                id="first_name"
                name="firstname"
                placeholder="Enter your first name"
                />
                </label>
               

                <label htmlFor="last_name">Last name
                <input type="text"
                id="last_name"
                name="lastname"
                placeholder="Enter your last name"
                />
                </label>
                    </div>
               
               

                <label htmlFor="email">Email
                <input type='email'
                id="email"
                name="email"
                placeholder="yourname@email.com"
                />
                </label>
               

                <label htmlFor="message">Last name
                <textarea  name="message" id="message" cols="30" rows="10"  placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                </label>

               <label htmlFor="terms" className="terms container">
               <input type="checkbox"  id="terms"/>
                <span class="checkmark"></span>You agree to providing your data to Zion who may contact you.
               </label>
                
                
                <button id="btn__submit" >Send message</button>
            </form>
                </div>
            <Footer />
            </div>

        
    )
 }