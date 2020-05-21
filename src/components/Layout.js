import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

import "../../src/index.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      siteData: site {
        siteMetadata {
          title
        }
      }
      resume: file(name: { regex: "/will-harris/" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <Header resume={data.resume.publicURL} />
      <main className="pt-32 bg-bodyBackground text-white flex flex-col">
        {children}
      </main>
      <Footer resume={data.resume.publicURL} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
