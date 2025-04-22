import React from 'react'
import ContactForm from './ContactForm'

function ConatctMeLeft() {
  return (
    <div className="flex flex-col gap-8 w-full">
     <h2 className="text-orange text-3xl mb-4">Get In Touch</h2>
      <p className='text-white'>
        Feel free to reach out if you’d like to collaborate
        <br />
        you are just a few clicks away!
      </p>
      <ContactForm/>
    </div>
  )
}

export default ConatctMeLeft