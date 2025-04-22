import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo'

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="jaisawatamit@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8690730379" Image={FiPhone} />
      <SingleInfo text="Jaipur, Rajasthan" Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo