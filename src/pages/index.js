import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/SEO"
import ProjectImage from "../components/ProjectImage"
import WaveEmoji from "../icons/WaveEmoji"
import HorizontalRulePrimary from "../components/HorizontalRulePrimary"
import HorizontalRuleSecondary from "../components/HorizontalRuleSecondary"
import HorizontalRuleAccent from "../components/HorizontalRuleAccent"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            id
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />

      <div className="mx-auto lg:ml-64 mb-8">
        <WaveEmoji />
      </div>
      <p className="font-body font-semibold mx-auto lg:ml-64 w-64 mb-12 lg:mb-32">
        Blurb about me blah blah blah Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent vitae orci at.
      </p>

      <div className="text-center mx-auto">
        <h2 className="font-body text-2xl font-bold border-b-8 border-primary w-32 mb-24 lg:mb-32">
          Projects
        </h2>
      </div>

      <div className="w-full mb-20 lg:mb-40">
        <ProjectImage
          url="rebeccawaldron.net"
          data={data.allFile.nodes[0]}
          border="border-primary"
        />
        <HorizontalRuleSecondary />
      </div>
      <div className="w-full mb-20 lg:mb-40">
        <ProjectImage
          url="bikesandbytes.net"
          data={data.allFile.nodes[1]}
          border="border-accent"
        />
        <HorizontalRuleAccent />
      </div>
      <div className="w-full mb-0">
        <ProjectImage
          url="bikesandbytes.net"
          data={data.allFile.nodes[1]}
          border="border-secondary"
        />
        <HorizontalRulePrimary />
      </div>
    </>
  )
}

export default IndexPage
