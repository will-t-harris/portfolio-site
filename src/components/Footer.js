import React from "react"
import { Link } from "gatsby"

import GithubIcon from "../icons/GitHubIcon"
import TwitterIcon from "../icons/TwitterIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import CodeIcon from "../icons/CodeIcon"

const Footer = () => {
  return (
    <div className="bg-footerBackground px-20">
      <div className="flex justify-start font-body font-semibold text-white pt-6">
        <Link to="#" className="pr-4 border-r-2 border-primary">
          Contact
        </Link>
        <Link to="#" className="pl-4 mr-auto">
          Resume
        </Link>
        <div className="flex">
          <GithubIcon twClasses="mr-2" />
          <TwitterIcon twClasses="mr-2" />
          <LinkedInIcon />
        </div>
      </div>
      <div className="flex text-white mt-6">
        <div className="flex mx-auto items-center">
          <CodeIcon /> 2020 Will Harris
        </div>
      </div>
    </div>
  )
}

export default Footer
