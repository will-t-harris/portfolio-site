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
          <GithubIcon twClasses="mr-2 hover:text-accent" />
          <TwitterIcon twClasses="mr-2 hover:text-accent" />
          <LinkedInIcon twClasses="hover:text-accent" />
        </div>
      </div>
    </div>
  )
}

export default Footer
