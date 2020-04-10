import React from "react"
import { Link } from "gatsby"

import GithubIcon from "../icons/GitHubIcon"
import TwitterIcon from "../icons/TwitterIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import CopyrightIcon from "../icons/CopyrightIcon"

const Footer = () => {
  return (
    <div className="bg-footerBackground ">
      <div className="flex justify-start font-body font-semibold text-white">
        <Link to="#" className="mr-10">
          Contact
        </Link>
        <Link to="#">Resume</Link>
      </div>
      <div className="flex justify-end ">
        <GithubIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <div className="flex text-white items-center mx-auto">
        <CopyrightIcon /> 2020 Will Harris
      </div>
    </div>
  )
}

export default Footer
