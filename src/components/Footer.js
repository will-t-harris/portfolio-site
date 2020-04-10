import React from "react"
import { Link } from "gatsby"

import Github from "-!svg-react-loader?props[]=className:w-12 h-12 px-2!../icons/github.svg"
import Twitter from "-!svg-react-loader?props[]=className:w-12 h-12 px-2!../icons/twitter.svg"
import Linkedin from "-!svg-react-loader?props[]=className:w-12 h-12 px-2!../icons/linkedin.svg"
import Copyright from "-!svg-react-loader?props[]=className:w-10 h-10 px-2!../icons/copyright.svg"

const Footer = () => {
  return (
    <div className="bg-footerBackground p-6">
      <div className="flex justify-start font-body font-semibold text-white">
        <Link to="#" className="mr-10">
          Contact
        </Link>
        <Link to="#">Resume</Link>
      </div>
      <div className="flex justify-end pt-6 pr-6">
        <Github />
        <Twitter />
        <Linkedin />
      </div>
      <div className="flex text-white items-center mx-auto">
        <Copyright /> 2020 Will Harris
      </div>
    </div>
  )
}

export default Footer
