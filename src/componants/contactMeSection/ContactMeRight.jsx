import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

function ContactMeRight() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 text-white">
      <img
        src="/public/public/images/email-image.png"
        alt="email image"
        className="max-w-[300px]"
      />
    <ContactInfo/>
    <ContactSocial/>
    </div>
  )
}

export default ContactMeRight