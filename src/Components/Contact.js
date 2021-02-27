import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import db from '../Firebase';
import './contact.css';
function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection("user").add({
            name:name,
            email:email,
            message:message
        })
        setName("");
        setEmail("");
        setMessage("");
    }
    return (
        <div className="contact" id="contact">
            <h1 className="text-center">Contact Me</h1>
            <form className="p-5">
                <div className="form-group">
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email"  placeholder="Enter email"/>
                </div>
                <div className="form-group">
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <textarea name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} className="form-control" id="message" placeholder="Write a message"></textarea>
                </div>
                <Button  type="submit" className="submit" onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    )
}

export default Contact; 
