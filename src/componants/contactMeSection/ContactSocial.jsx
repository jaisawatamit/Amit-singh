import React from 'react'

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import SingleContactSocial from './SingleContactSocial';

function ContactSocial() {
  return (
    <div>
      <div className="flex gap-4">
        <SingleContactSocial link="https://www.linkedin.com/in/jaisawatamit/" Icon={FaLinkedinIn} />
        <SingleContactSocial link="https://github.com/jaisawatamit" Icon={FiGithub} />
        <SingleContactSocial link="#" Icon={FaInstagram} />
      </div>
    </div>
  )
}

export default ContactSocial