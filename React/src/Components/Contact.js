import React, {useState} from 'react'
import axios from 'axios'

function Contact() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')
    const sendmail = () => {
        axios.post('http://localhost:5000/sendmail', {
            name: name,
            email: email,
            subject: subject,
            message: message
        
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                // console.log(e.target.Message.value);
                e.target.reset();
                
                }}>
                <input type="text" name="Username" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Your Name" required/>
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required/>
                <input type="text" name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Subject" required/>
                <input type="text" name="Message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" required/>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact
