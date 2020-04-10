import React from "react"
import { Link } from "gatsby"

import Github from "-!svg-react-loader?props[]=className:w-12 h-12 px-2!../icons/github.svg"
import Twitter from "-!svg-react-loader?props[]=className:w-12 h-12 px-2!../icons/twitter.svg"
import Linkedin from "-!svg-react-loader?props[]=className:w-12 h-12 px-2!../icons/linkedin.svg"

const Footer = () => {
  return (
    <div className="bg-footerBackground">
      <div className="font-body text-white">
        <Link to="#">Contact</Link>
        <Link to="#">Resume</Link>
      </div>
      <div className="flex justify-end pt-6 pr-6">
        <Github />
        <Twitter />
        <Linkedin />
      </div>
      <div>Copyright</div>
    </div>
  )
}

export default Footer
