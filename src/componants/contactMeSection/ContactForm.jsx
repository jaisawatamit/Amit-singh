import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [success, setSuccess] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_t0pozqe', 'template_5j4z44n', form.current, {
            publicKey: 'qk_6ZkSNmP5s6k4HZ',
          })
          .then(
            () => {
              setSuccess("Message Sent Succesfully");
              e.target.reset(); 
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

          
      };
  return (
    <div>
        <p className="text-cyan">{success}</p>
        <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <input type="text" 
        name="from_name"
        className="h-12 rounded-lg bg-lightBrown px-2"  
        placeholder="Your Name"
        required
        />
        <input 
        name="from_email"
        type="email" 
        className="h-12 rounded-lg bg-lightBrown px-2" 
        placeholder="Your Email"
        required
        />
        <textarea 
        name="message"
        className=" rounded-lg bg-lightBrown p-2 text-white" 
        type="text" 
        rows="9"
        cols="50" 
        placeholder="Message"
        required
        />
        <button type='submit' className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">
            send
        </button>
        </form>
    </div>
  )
}

export default ContactForm