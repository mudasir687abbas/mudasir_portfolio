import '../styles/contact.css';
import { GitCommit,ListTodo} from 'lucide-react';
function Contact(){
    return(
        <section className='contact-section' id='contact'>
          <div className='contact-content'>
          <h1>Let's in touch</h1>
          <div className='contact-container'>
           <div className='social-links'>
             <div className='social-link'>
                <GitCommit size='40' style={{background:'blue',color:'white',padding:'3px',borderRadius:'5px'}}/>
                <div className='social-link-info'>
                    <p className='social-link-name'>LinkedIn</p>
                    <a href='https://www.linkedin.com/in/mudasir-abbas-26b016269/?skipRedirect=true' target='_blank' className='social-link-url'>@mudasir</a>
                </div>
               </div>
             <div className='social-link'>
                <ListTodo size='40' style={{background:'blue',color:'white',padding:'3px',borderRadius:'5px'}}/>
                <div className='social-link-info'>
                    <p className='social-link-name'>GitHub</p>
                    <a href='https://www.github.com/mudasir687abbas' target='_blank' className='social-link-url'>@mudasir</a>
                </div>
               </div>
             <div className='social-link'>
                <GitCommit size='40' style={{background:'blue',color:'white',padding:'3px',borderRadius:'5px'}}/>
                <div className='social-link-info'>
                    <p className='social-link-name'>Github</p>
                    <p className='social-link-url'>@mudasir</p>
                </div>
               </div>
             <div className='social-link'>
                <GitCommit size='40' style={{background:'blue',color:'white',padding:'3px',borderRadius:'5px'}}/>
                <div className='social-link-info'>
                    <p className='social-link-name'>Github</p>
                    <a href='https://www.linkedin.com/in/mudasir-abbas-26b016269/?skipRedirect=true' target='_blank' className='social-link-url'>@mudasir</a>
                </div>
               </div>
           </div>
           <form>
             <h2>Send a Message</h2>
             <div className='input-group'>
                <label>Full Name</label>
                <input type='text' placeholder='Type name...'/>
             </div>
             <div className='input-group'>
                <label>Email Address</label>
                <input type='email' placeholder='Type email...'/>
             </div>
             <div className='input-group'>
                <label>Subject</label>
                <input type='text' placeholder='Type subject...'/>
             </div>
             <div className='input-group' >
                <label>Your Message</label>
                <textarea type='text'  placeholder='Type message...'>
                </textarea>
             </div>
             <div className='input-btn-group'>
                <input type='reset' value='Reset' className='btn'/>
                <input type='submit' value='Send' className='btn'/>
             </div>
             
             
           </form>
          </div>
          </div>  
        </section>
    )
}
export default Contact;