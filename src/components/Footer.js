import React from "react"
import { Link } from "gatsby"

import GithubIcon from "../icons/GitHubIcon"
import TwitterIcon from "../icons/TwitterIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import CodeIcon from "../icons/CodeIcon"

const Footer = ({ resume }) => {
  return (
    <div className="bg-black py-8">
      <div className="flex justify-evenly font-body font-semibold text-white">
        <div className="flex">
          <Link to="#" className="pr-4 border-r-2 border-primary">
            Contact
          </Link>
          <a href={resume} className="pl-4" download>
            Resume
          </a>
        </div>
        <div className="lg:flex hidden">
          <CodeIcon /> 2020 Will Harris
        </div>
        <div className="flex">
          <GithubIcon twClasses="mr-2 icon-transition" />
          <TwitterIcon twClasses="mr-2 icon-transition" />
          <LinkedInIcon twClasses=" icon-transition" />
        </div>
      </div>
    </div>
  )
}

export default Footer
